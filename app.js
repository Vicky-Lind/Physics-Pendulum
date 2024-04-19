var express = require('express');
var app = express();
const { engine } = require('express-handlebars');

app.use(express.static('public')) // Statics
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views') // Web pages

app.get('/', function (req, res) {
    res.render('index.handlebars');
});
app.listen(8000, function () {
  console.log('Pendulum app started on 8000');
});