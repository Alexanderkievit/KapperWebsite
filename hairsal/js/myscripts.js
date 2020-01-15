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
    datum_tijd = datum[2]+"-"+datum[1]+"-"+datum[0]+" "+tijd;
    let jsondata = {'first_name': first_name, 'last_name': last_name, 'keuze_behandeling': keuze_behandeling, 'keuze_kapper': keuze_kapper, 'email': email, 'telefoonnummer': telefoonnummer, 'datum_tijd': datum_tijd};
    fetch('http://127.0.0.1:5000/afspraak', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(jsondata)
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });

    return false;
}