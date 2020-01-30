const mariadb = require('mariadb');
var async = require('async');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'alexander',
    password: 'root',
    port: 3306,
    database: 'kappersapp'
});

module.exports = {
    get_appointments: async function (data) {
        let appointments = [];
        return new Promise(function (resolve, reject) {
            pool.getConnection()
                .then(conn => {
                    let keuze_kapper = data["keuze_kapper"];
                    conn.query("SELECT * FROM afspraak")
                        .then((rows) => {
                            for (row of rows) {
                                appointments.push(row);
                            }
                            resolve(appointments);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                    conn.end();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        });
    },

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
} 