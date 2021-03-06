var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var request = require('request');

var beastApi = 'http://services.runescape.com/m=itemdb_rs/bestiary/beastSearch.json?term=',
    beastApiId = 'http://services.runescape.com/m=itemdb_rs/bestiary/beastData.json?beastid=',
    hiscoresApi = 'http://services.runescape.com/m=hiscore/index_lite.ws?player=',
    grandexchangeApi = 'http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=';

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

//Api call to beastery data
app.get('/beastery/:text', (req, res) => {
  request(beastApi + req.params.text, (err, response, body) => {
    console.log(body)
    res.send(body);
  });
})

app.get('/beastery/:id', (req, res) => {
  request(beastApiId + req.params.id, (err, response, body) => {
    console.log(body);
    res.send(body);
  })
})

//Api call to grand exchange data
app.get('/grandexchange/:text', (req, res) => {
  request(grandexchangeApi + req.params.text, (err, response, body) => {
    console.log(body);
    res.send(body);
  });
})

app.get('/grandexchange/item/:id', (req, res) => {
  request(`http://services.runescape.com/m=itemdb_rs/api/graph/${req.params.id}.json`, (err, response, body) => {
    console.log(body);
    res.send(body);
  });
})

//Api call to hiscores data
var Converter = require('csvtojson').Converter;
var converter = new Converter({});

converter.on('record_parsed', (jsonObj) => {
  console.log(jsonObj);
})

app.get('/hiscores/:text', (req, res) => {
  request.get(hiscoresApi + req.params.text).pipe(converter).pipe(res);
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
