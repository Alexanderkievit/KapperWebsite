function maak_afspraak() {
    let first_name = document.getElementById('voornaam').value;
    let last_name = document.getElementById('achternaam').value;
    let keuze_behandeling = document.getElementById('keuze_behandeling').value;
    let keuze_kapper = document.querySelector('input[name="kapper"]:checked').value;
    let email = document.getElementById('email').value;
    let telefoonnummer = document.getElementById('telefoonnummer').value;

    let datum_tijd = document.getElementById('picker').value;
    datum_tijd = datum_tijd.split(" ");
    let datum = datum_tijd[0];
    let tijd = datum_tijd[1];
    datum = datum.split('-');
    datum_tijd = datum[2] + "-" + datum[1] + "-" + datum[0] + " " + tijd;
    
    let jsondata = { 'first_name': first_name, 'last_name': last_name, 'keuze_behandeling': keuze_behandeling, 'keuze_kapper': keuze_kapper, 'email': email, 'telefoonnummer': telefoonnummer, 'datum_tijd': datum_tijd };
    fetch('http://127.0.0.1:5000/afspraak', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(jsondata)
    }).then((response) => {
        return response.json();
    }).then((data) => {
        if (data['succes']) {
            window.location.replace("/bevestiging.html?keuze_kapper=" + keuze_kapper + "&keuze_behandeling=" + keuze_behandeling + "&first_name=" + first_name + "&last_name=" + last_name + "&email=" + email + "&telefoonnummer=" + telefoonnummer + "&datum_tijd=" + datum_tijd);
        } else {
            console.log(data);
        }
    });
    return false;
}
//Geen afspraak maken als nog niet alles is ingevuld
function notDisable(){
    document.getElementById('submit').removeAttribute('disabled');
};

//Beschikbaarheid ophalen
function get_appointments() {
    fetch('http://localhost:5000/get_appointmens', {
        method: 'GET',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        }).then(v => v.json())
            .then(response => {
            response = response.json();

            var barber = document.querySelector('input[name="kapper"]:checked').value;
            var datum_tijd = document.getElementById("picker").value;
            var selector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
            var timesArray = [];
            var tijdenArray = [];
        
            selector.forEach(tijdenEnable);
            timesArray.forEach(mijnfunctie);
            response.forEach(myFunction);

            function tijdenEnable(value) {
                timesArray.push(datum_tijd.options[value].value);
            }
            function mijnfunctie(value) {
                var eenKeuze = document.getElementById(value);
                eenKeuze.disabled = false;
            }
            function myFunction(value) {
                if (value.datum == datum_tijd){
                    if (value.kapper == barber) {
                        tijdenArray.push(value.datum_tijd);
                        tijdenArray.sort();
                        tijdenArray.forEach(tijdenDisable);
                    }
                }
            }
            // disable de tijden die bezit zijn
            function tijdenDisable(value, index, array) {
                var Occupied = document.getElementById(value);
                Occupied.setAttribute("disabled", true);
            }

        });
}