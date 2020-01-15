var express = require('express');
var app = express();
const cors = require('cors');
var bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var script = require('./script');

app.set('views', './views')
app.set('view engine', 'pug')
app.use(cors())

app.use(express.static('./hairsal'))

app.post('/afspraak', function(req, res) {
    var first_name = req.body.first_name;
    console.log('Gelukt lekker bezig pik');
    script.insert_afspraak(req.body);
    res.json({'binnen': 'binn bericht'});
});






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));

