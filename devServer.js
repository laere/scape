var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var request = require('request');
var morgan = require('morgan');

var beastApi = 'http://services.runescape.com/m=itemdb_rs/bestiary/beastSearch.json?term=';
var beastApiId = 'http://services.runescape.com/m=itemdb_rs/bestiary/beastData.json?beastid=';
var hiscoresApi;
var grandexchangeApi;

var app = express();
var compiler = webpack(config);

// app.use(morgan('combined'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('/beastery/:text/', (req, res) => {
  request(beastApi + req.params.text, (err, response, body) => {
    console.log(response.statusCode);
    console.log(body);
    res.send(body);
  });
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
