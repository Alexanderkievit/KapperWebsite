var express = require('express');
var app = express();
const cors = require('cors');
var bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var script = require('./script');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(cors());

app.use(express.static('./hairsal'));

app.post('/afspraak', function(req, res) {
    var behandeling = req.body.keuze_behandeling;
    var kapper = req.body.kapper;
    var voornaam = req.body.voornaam;
    var achternaam = req.body.achternaam;
    var email = req.body.email;
    var telefoonNum = req.body.telefoonnummer;
    var dateTime = req.body.picker;
    console.log('Gelukt lekker bezig pik');
    script.insert_afspraak(req.body);
    res.redirect("/bevestiging.html?keuze_behandeling=" + behandeling + "?keuze_kapper=" + kapper + "?first_name=" + voornaam + "?last_name=" + achternaam + "? email=" + email + "?telefoonnummer=" + telefoonNum + "?datum_tijd=" + dateTime);
});






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));

