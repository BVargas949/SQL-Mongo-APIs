var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
   {
      title: 'Mhm' 

    });
})

.post('/setdata', async(request, reponse) =>{
console.log(request.body)
reponse.end();
});


module.exports = router;
