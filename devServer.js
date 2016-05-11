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

app.get('/beastery/:text', (req, res) => {
  request(beastApi + req.params.text, (err, response, body) => {
    console.log(body)
    res.send(body);
  });
})

app.get('/hiscores/:text', (req, res) => {
  request(hiscoresApi + req.params.text, (err, response, body ) => {
    console.log(body);
    res.send(body);
  });
})

// app.get('/grandexchange/:item', (req, res) => {
//   request(grandexchangeApi + req.params.item, (err, response, body) => {
//     console.log(res.statusCode, body);
//     res.send(body);
//   })
// })


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
