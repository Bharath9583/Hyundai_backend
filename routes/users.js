var express = require('express');
var router = express.Router();

/* GET users listing. */
let usersList = [{"employee_id":1,"first_name":"Sib","last_name":"Toone","email":"stoone0@ihg.com","gender":"Female"},
{"employee_id":2,"first_name":"Bat","last_name":"Dutteridge","email":"bdutteridge1@stanford.edu","gender":"Male"},
{"employee_id":3,"first_name":"Marta","last_name":"Goves","email":"mgoves2@ebay.com","gender":"Female"},
{"employee_id":4,"first_name":"Lonnard","last_name":"Caron","email":"lcaron3@unicef.org","gender":"Male"},
{"employee_id":5,"first_name":"Prince","last_name":"Burgon","email":"pburgon4@unesco.org","gender":"Male"},
{"employee_id":6,"first_name":"Gilbertine","last_name":"Lamboll","email":"glamboll5@businessweek.com","gender":"Female"},
{"employee_id":7,"first_name":"Michaela","last_name":"Scardifeild","email":"mscardifeild6@moonfruit.com","gender":"Female"},
{"employee_id":8,"first_name":"Blanca","last_name":"Reuven","email":"breuven7@telegraph.co.uk","gender":"Female"},
{"employee_id":9,"first_name":"Morgun","last_name":"Lackner","email":"mlackner8@yolasite.com","gender":"Male"},
{"employee_id":10,"first_name":"Luther","last_name":"Stamps","email":"lstamps9@ow.ly","gender":"Other"},
{"employee_id":11,"first_name":"Giorgia","last_name":"Swadon","email":"gswadona@mit.edu","gender":"Female"},
{"employee_id":12,"first_name":"Carroll","last_name":"Hughes","email":"chughesb@about.me","gender":"Female"},
{"employee_id":13,"first_name":"Hall","last_name":"Cody","email":"hcodyc@tiny.cc","gender":"Other"},
{"employee_id":14,"first_name":"Hilary","last_name":"Savine","email":"hsavined@sohu.com","gender":"Female"},
{"employee_id":15,"first_name":"Adelle","last_name":"Tippin","email":"atippine@ibm.com","gender":"Female"},
{"employee_id":16,"first_name":"Amy","last_name":"Gres","email":"agresf@foxnews.com","gender":"Other"},
{"employee_id":17,"first_name":"Thalia","last_name":"Goldin","email":"tgolding@networkadvertising.org","gender":"Female"},
{"employee_id":18,"first_name":"Dasi","last_name":"Keems","email":"dkeemsh@dot.gov","gender":"Female"},
{"employee_id":19,"first_name":"Loydie","last_name":"Jakovijevic","email":"ljakovijevici@altervista.org","gender":"Male"},
{"employee_id":20,"first_name":"Merrile","last_name":"Timbrell","email":"mtimbrellj@sina.com.cn","gender":"Female"},
{"employee_id":21,"first_name":"Jimmie","last_name":"Kobiera","email":"jkobierak@reference.com","gender":"Male"},
{"employee_id":22,"first_name":"Shirley","last_name":"Ottey","email":"sotteyl@shutterfly.com","gender":"Female"},
{"employee_id":23,"first_name":"Gilbertina","last_name":"Leckenby","email":"gleckenbym@ameblo.jp","gender":"Female"},
{"employee_id":24,"first_name":"Page","last_name":"Ainley","email":"painleyn@sciencedaily.com","gender":"Female"},
{"employee_id":25,"first_name":"Keene","last_name":"Albion","email":"kalbiono@whitehouse.gov","gender":"Male"},
{"employee_id":26,"first_name":"Melva","last_name":"Antognozzii","email":"mantognozziip@ftc.gov","gender":"Female"},
{"employee_id":27,"first_name":"Kara","last_name":"Peschka","email":"kpeschkaq@indiatimes.com","gender":"Female"},
{"employee_id":28,"first_name":"Petra","last_name":"Pacher","email":"ppacherr@goodreads.com","gender":"Other"},
{"employee_id":29,"first_name":"Lemmy","last_name":"Hunte","email":"lhuntes@liveinternet.ru","gender":"Male"},
{"employee_id":30,"first_name":"Meade","last_name":"Reedy","email":"mreedyt@creativecommons.org","gender":"Male"},
{"employee_id":31,"first_name":"Fanni","last_name":"MacAiline","email":"fmacailineu@issuu.com","gender":"Female"},
{"employee_id":32,"first_name":"Martainn","last_name":"Farnill","email":"mfarnillv@springer.com","gender":"Male"},
{"employee_id":33,"first_name":"Basilio","last_name":"Lasselle","email":"blassellew@weebly.com","gender":"Male"},
{"employee_id":34,"first_name":"Dimitri","last_name":"Gladdor","email":"dgladdorx@usgs.gov","gender":"Male"},
{"employee_id":35,"first_name":"Pattie","last_name":"Jahns","email":"pjahnsy@google.co.jp","gender":"Female"},
{"employee_id":36,"first_name":"Isadore","last_name":"Harker","email":"iharkerz@creativecommons.org","gender":"Male"},
{"employee_id":37,"first_name":"Antonella","last_name":"Beteriss","email":"abeteriss10@nsw.gov.au","gender":"Female"},
{"employee_id":38,"first_name":"Asher","last_name":"MacKnockiter","email":"amacknockiter11@de.vu","gender":"Male"},
{"employee_id":39,"first_name":"Wyatan","last_name":"Cranmere","email":"wcranmere12@privacy.gov.au","gender":"Male"},
{"employee_id":40,"first_name":"Pyotr","last_name":"Reinert","email":"preinert13@irs.gov","gender":"Male"},
{"employee_id":41,"first_name":"Cchaddie","last_name":"Azam","email":"cazam14@ehow.com","gender":"Other"},
{"employee_id":42,"first_name":"Broddie","last_name":"McGraw","email":"bmcgraw15@a8.net","gender":"Male"},
{"employee_id":43,"first_name":"Cosette","last_name":"O'Coskerry","email":"cocoskerry16@netscape.com","gender":"Female"},
{"employee_id":44,"first_name":"Danette","last_name":"Bromby","email":"dbromby17@de.vu","gender":"Female"},
{"employee_id":45,"first_name":"Mona","last_name":"Frances","email":"mfrances18@hugedomains.com","gender":"Female"},
{"employee_id":46,"first_name":"Valene","last_name":"Chessil","email":"vchessil19@skype.com","gender":"Female"},
{"employee_id":47,"first_name":"Kimble","last_name":"Skunes","email":"kskunes1a@earthlink.net","gender":"Male"},
{"employee_id":48,"first_name":"Ailis","last_name":"MacGrath","email":"amacgrath1b@scribd.com","gender":"Female"},
{"employee_id":49,"first_name":"Lorie","last_name":"Stourton","email":"lstourton1c@microsoft.com","gender":"Female"},
{"employee_id":50,"first_name":"Norine","last_name":"Clows","email":"nclows1d@slideshare.net","gender":"Other"},
{"employee_id":51,"first_name":"Bucky","last_name":"Wyke","email":"bwyke1e@ezinearticles.com","gender":"Male"},
{"employee_id":52,"first_name":"Thaxter","last_name":"Griffitt","email":"tgriffitt1f@toplist.cz","gender":"Male"},
{"employee_id":53,"first_name":"Shawnee","last_name":"Redan","email":"sredan1g@w3.org","gender":"Female"},
{"employee_id":54,"first_name":"Vernen","last_name":"Rye","email":"vrye1h@globo.com","gender":"Male"},
{"employee_id":55,"first_name":"Joell","last_name":"Gardener","email":"jgardener1i@blogtalkradio.com","gender":"Female"},
{"employee_id":56,"first_name":"Claiborne","last_name":"Bowshire","email":"cbowshire1j@usgs.gov","gender":"Male"},
{"employee_id":57,"first_name":"Torre","last_name":"O'Fallowne","email":"tofallowne1k@e-recht24.de","gender":"Genderqueer"},
{"employee_id":58,"first_name":"Marius","last_name":"Yacobsohn","email":"myacobsohn1l@twitter.com","gender":"Genderqueer"},
{"employee_id":59,"first_name":"Myra","last_name":"Phant","email":"mphant1m@utexas.edu","gender":"Female"},
{"employee_id":60,"first_name":"Shandy","last_name":"Voas","email":"svoas1n@is.gd","gender":"Female"},
{"employee_id":61,"first_name":"Neville","last_name":"Clemanceau","email":"nclemanceau1o@deviantart.com","gender":"Male"},
{"employee_id":62,"first_name":"Fitzgerald","last_name":"Craisford","email":"fcraisford1p@arizona.edu","gender":"Male"},
{"employee_id":63,"first_name":"Robbi","last_name":"Bennis","email":"rbennis1q@loc.gov","gender":"Female"},
{"employee_id":64,"first_name":"Cristionna","last_name":"Pavic","email":"cpavic1r@imageshack.us","gender":"Female"},
{"employee_id":65,"first_name":"Charlene","last_name":"Eastman","email":"ceastman1s@tuttocitta.it","gender":"Female"},
{"employee_id":66,"first_name":"Tiffi","last_name":"Phoebe","email":"tphoebe1t@hexun.com","gender":"Female"},
{"employee_id":67,"first_name":"Jeramie","last_name":"Blunden","email":"jblunden1u@fema.gov","gender":"Male"},
{"employee_id":68,"first_name":"Aili","last_name":"Ollivier","email":"aollivier1v@flickr.com","gender":"Female"},
{"employee_id":69,"first_name":"Sharron","last_name":"Toal","email":"stoal1w@icio.us","gender":"Female"},
{"employee_id":70,"first_name":"Jimmy","last_name":"Alman","email":"jalman1x@china.com.cn","gender":"Male"},
{"employee_id":71,"first_name":"Matty","last_name":"Jeness","email":"mjeness1y@imdb.com","gender":"Male"},
{"employee_id":72,"first_name":"Silvio","last_name":"Houltham","email":"shoultham1z@fema.gov","gender":"Male"},
{"employee_id":73,"first_name":"Theodor","last_name":"Drabble","email":"tdrabble20@pcworld.com","gender":"Male"},
{"employee_id":74,"first_name":"Erskine","last_name":"Klaus","email":"eklaus21@networkadvertising.org","gender":"Male"},
{"employee_id":75,"first_name":"Felipa","last_name":"Babon","email":"fbabon22@cafepress.com","gender":"Female"},
{"employee_id":76,"first_name":"Netty","last_name":"Gallahar","email":"ngallahar23@desdev.cn","gender":"Female"},
{"employee_id":77,"first_name":"Tess","last_name":"Comberbach","email":"tcomberbach24@weibo.com","gender":"Female"},
{"employee_id":78,"first_name":"Meara","last_name":"Whifen","email":"mwhifen25@php.net","gender":"Female"},
{"employee_id":79,"first_name":"Steven","last_name":"Loder","email":"sloder26@shinystat.com","gender":"Male"},
{"employee_id":80,"first_name":"Parker","last_name":"Bozworth","email":"pbozworth27@chicagotribune.com","gender":"Male"},
{"employee_id":81,"first_name":"Jeannie","last_name":"Pond","email":"jpond28@mapy.cz","gender":"Female"},
{"employee_id":82,"first_name":"Aguie","last_name":"Healeas","email":"ahealeas29@liveinternet.ru","gender":"Male"},
{"employee_id":83,"first_name":"Nissie","last_name":"Korneev","email":"nkorneev2a@illinois.edu","gender":"Female"},
{"employee_id":84,"first_name":"Zuzana","last_name":"McEntee","email":"zmcentee2b@apache.org","gender":"Female"},
{"employee_id":85,"first_name":"Claudianus","last_name":"Peskin","email":"cpeskin2c@redcross.org","gender":"Male"},
{"employee_id":86,"first_name":"Gwenette","last_name":"MacDermid","email":"gmacdermid2d@spotify.com","gender":"Female"},
{"employee_id":87,"first_name":"Max","last_name":"Crufts","email":"mcrufts2e@pbs.org","gender":"Female"},
{"employee_id":88,"first_name":"Jacquelynn","last_name":"Partrick","email":"jpartrick2f@illinois.edu","gender":"Female"},
{"employee_id":89,"first_name":"Allison","last_name":"Borborough","email":"aborborough2g@vinaora.com","gender":"Female"},
{"employee_id":90,"first_name":"Cissy","last_name":"Magill","email":"cmagill2h@bigcartel.com","gender":"Female"},
{"employee_id":91,"first_name":"Madge","last_name":"Mawson","email":"mmawson2i@about.com","gender":"Other"},
{"employee_id":92,"first_name":"Jason","last_name":"Hindhaugh","email":"jhindhaugh2j@stumbleupon.com","gender":"Other"},
{"employee_id":93,"first_name":"Beauregard","last_name":"Garnsworth","email":"bgarnsworth2k@last.fm","gender":"Male"},
{"employee_id":94,"first_name":"Paquito","last_name":"Diggle","email":"pdiggle2l@wikimedia.org","gender":"Male"},
{"employee_id":95,"first_name":"Nobie","last_name":"Terrett","email":"nterrett2m@examiner.com","gender":"Male"},
{"employee_id":96,"first_name":"Glenn","last_name":"Harse","email":"gharse2n@ucoz.ru","gender":"Male"},
{"employee_id":97,"first_name":"Gilli","last_name":"Morffew","email":"gmorffew2o@wisc.edu","gender":"Female"},
{"employee_id":98,"first_name":"Aurore","last_name":"Gasparro","email":"agasparro2p@bluehost.com","gender":"Female"},
{"employee_id":99,"first_name":"Blaine","last_name":"Sartain","email":"bsartain2q@mail.ru","gender":"Other"},
{"employee_id":100,"first_name":"Tawsha","last_name":"Ivison","email":"tivison2r@mail.ru","gender":"Female"}]
router.get('/', function(req, res, next) {
  res.send(usersList);
});

router.post('/add',function(req, res, next) {
  usersList.push({
    employee_id: usersList.at(-1).employee_id + 1,
    first_name: req.body.firstName,
    last_name:  req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
  })
  res.send(usersList);
})

router.put('/update',function(req, res, next) {
  let index = usersList.findIndex(a=>a.employee_id === req.body.employee_id)
  usersList[index] = {
    employee_id: req.body.employee_id,
    first_name: req.body.firstName,
    last_name:  req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
  }
  res.send(usersList);
})

router.delete('/:id',function(req, res, next) {
  usersList = usersList.filter(a=>a.employee_id!=(parseInt(req.params.id)||0))
  res.send(usersList);
})

module.exports = router;
