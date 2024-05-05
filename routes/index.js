var express = require('express');
var router = express.Router();

const fs = require('fs');
const jwt = require('jsonwebtoken');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  fs.readFile('user_credentials.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
    try {
        const users = JSON.parse(data);
        const { username, password } = req.body;
        const user = users.find(user => user.username === username && user.password === password);
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const token = jwt.sign({ username: user.username }, 'hyundai-lab');
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
});

module.exports = router;
