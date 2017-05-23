var express = require('express');
var router = express.Router();
var request = require('request');


// This is a post request using certain parameters to help with a calorie deficit and weight loss goal
router.post('/cut', function(req, res, next) {
  var query = req.body.searchDataOne
  var app_id = process.env.EDAMAM_APP_ID;
  var app_key = process.env.EDAMAM_API_KEY;
  var url = `http://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&diet=low-fat&from=0&to=20&calories=gte%20200,%20lte%20225&health=alcohol-free`
  request(url, function(err, response, body) {
    if (!err && res.statusCode == 200){
      try {
        var data = JSON.parse(body)
        res.json(data)
      } catch (e) {
        return res.send(body)
      }
    }
  })
});

// This is a post request using certain parameters to help increase weight meant for bulking by increasing calorie intake as well as focusing on high protein content.
router.post('/bulk', function(req, res, next) {
  var query = req.body.searchDataTwo
  var app_id = process.env.EDAMAM_APP_ID;
  var app_key = process.env.EDAMAM_API_KEY;
  var url = `http://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&diet=high-protein&from=0&to=20&calories=gte%20200,%20lte%20500&health=alcohol-free`
  request(url, function(err, response, body) {
    if (!err && res.statusCode == 200){
      try {
        var data = JSON.parse(body)
        res.json(data)
      } catch (e) {
        return res.send(body)
      }
    }
  })
});


module.exports = router;
