var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 4000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error) // eslint-disable-line no-console
  } else {
    console.info('==> http://localhost:%s/', port) // eslint-disable-line no-console
  }
})
