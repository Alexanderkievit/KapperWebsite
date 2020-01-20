const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'alexander',
    password: 'root',
    port: 3306,
    database: 'kappersapp'
});

module.exports = {
    insert_afspraak: function (data) {

        pool.getConnection()
            .then(conn => {
                let first_name = data["first_name"];
                let last_name = data["last_name"];
                let keuze_behandeling = data["keuze_behandeling"];
                let keuze_kapper = data["keuze_kapper"];
                let email = data["email"];
                let telefoonnummer = data["telefoonnummer"];
                let datum_tijd = data["datum_tijd"];
                conn.query("INSERT INTO afspraak(first_name, last_name, keuze_behandeling, keuze_kapper, email, telefoonnummer, datum_tijd) values (?, ?, ?, ?, ?, ?, ?)", [first_name, last_name, keuze_behandeling, keuze_kapper, email, telefoonnummer, datum_tijd]);
                conn.end();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    },
    retreive_afspraak: function (id, cb) {
        pool.getConnection()
            .then(conn => {
                conn.query("SELECT * FROM afspraak WHERE id_afspraak = (?);", [id]).then(entry => {
                    conn.end()
                    cb(entry)
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
}