var express = require('express');
var app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var script = require('./script');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(cors());

app.use(express.static('./hairsal'));

app.get('/db_check', function (req, res) {

    script.find().make(function (filter) {
        filter.callback(function (err, response) {
            res.json({ response })
        });
    });
});

app.get('/get_appointments', function (req, res) {
    console.log("before call ");
    let appointments = script.get_appointments(req.body).then((appointments) => {
        console.log("after call ");
        console.log(appointments);
        res.json(appointments);
    });
});

app.post('/afspraak', function (req, res) {
    script.insert_afspraak(req.body);
    res.json({ 'succes': true });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));

