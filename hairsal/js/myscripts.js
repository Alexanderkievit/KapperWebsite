function maak_afspraak() {
    let first_name = document.getElementById('voornaam').value;
    let last_name = document.getElementById('achternaam').value;
    let keuze_behandeling = document.getElementById('keuze_behandeling').value;
    let keuze_kapper = document.getElementById('keuze_kapper').value;
    let email = document.getElementById('email').value;
    let telefoonnummer = document.getElementById('telefoonnummer').value;
    let jsondata = {'first_name': first_name, 'last_name': last_name, 'keuze_behandeling': keuze_behandeling, 'keuze_kapper': keuze_kapper, 'email': email, 'telefoonnummer': telefoonnummer};
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