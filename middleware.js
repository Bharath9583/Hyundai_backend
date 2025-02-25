const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
const token = req.header('Authorization');
console.log(token)
if (!token) return res.status(401).json({ error: 'Access denied' });
try {
 const decoded = jwt.verify(token.split(' ')[1], 'hyundai-lab');
 req.userId = decoded.username;
 next();
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = verifyToken;