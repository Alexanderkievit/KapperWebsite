module.exports = {
    insert_afspraak: function (data) {
        const mariadb = require('mariadb');
        const pool = mariadb.createPool({
            host: 'localhost',
            user: 'alexander',
            password: 'root',
            port: 3306
        });
        pool.getConnection()
            .then(conn => {
                let first_name = data["first_name"];
                let last_name = data["last_name"];
                let keuze_behandeling = data["keuze_behandeling"];
                let keuze_kapper = data["keuze_kapper"];
                let email = data["email"];
                let telefoonnummer = data["telefoonnummer"];
                conn.query("INSERT INTO afspraak(first_name, last_name, keuze_behandeling, keuze_kapper, email, telefoonnummer) values (?, ?, ?, ?, ?, ?)", [first_name, last_name, keuze_behandeling, keuze_kapper, email, telefoonnummer]);
                conn.end();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}