var express = require('express');
var jsonParser = require('body-parser');
var app = express();
var router = express.Router()
var exphbs = require('express-handlebars');
//var routes = require('./routes')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(jsonParser())

mongoose.connection.on("error", function(err) {
  console.log("Mongo error : ");
  console.log(err);
});

const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoes";

mongoose.connect(mongoURL, function(err) {
  if (err) {
    console.log('Error Connecting to DB: ' + err);
  } else {
    console.log('connection to DB is successful');
  }
});


app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static('public'))


var shoeSche = mongoose.model('shoeSche', {
  brand: String,
  //id: Number,
  color: String,
  price: Number,
  size: Number,
  in_stock: Number
});


app.get('/api/shoes', function(req, res) {

  shoeSche.find({}, function(err, results) {
    if (err) {
      console.log(err);
    } else {
      res.json({results:results})
    }
  });

})

app.post('/api/shoes', function(req, res) {
    var stock = req.body
    //console.log(stock);

    shoeSche.create({
      brand: stock.brand,
      color: stock.color,
      price: stock.price,
      size: stock.size,
      in_stock: stock.in_stock
    }, function(err, results) {
      if (err) {
        console.log(err);
      } else {
        res.json({results})
      }
    });

});

app.get('/api/shoes/brand/:brandname', function(req, res) {
    var brand = req.params.brandname

    shoeSche.find({
      brand: brand
    }, function(err, results) {
      if (err) {
        console.log(err);
      }
      res.json({
        results
      })
    })
});

  app.get('/api/shoes/brand/:brandname/size/:size', function(req, res) {
    var brand = req.params.brandname
    var size = req.params.size

    shoeSche.find({
      brand: brand,
      size: size
    }, function(err, results) {
      if (err) {
        console.log(err);
      }

      res.json({
        results
      })
    })
  });

  app.post('/api/shoes/sold/:id', function(req, res) {


    var id = req.params.id


    shoeSche.findOneAndUpdate({
      _id: id
    }, {
      $inc: {
        in_stock: -1
      }
    }, {
      upsert: false
    }, function(err, results) {
      if (err) {
        console.log(err);
      }

      else{
        res.json({
        results:  results
      });
      }
    })

  });


  // res.json({
  //   response: 'You sent me a get reponce'
  // })

//})



const port = process.env.PORT || 5001;
app.use(function(err, req, res, next) {
  res.status(500).send(err.stack);
})

app.listen(port, function() {
  console.log('Example app listening at :' + port)
});
