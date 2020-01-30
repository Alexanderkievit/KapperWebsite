var url = new URL(window.location.href);
var voornaam = url.searchParams.get("first_name");
var achternaam = url.searchParams.get("last_name");
var email = url.searchParams.get("email");
var telefoonNum = url.searchParams.get("telefoonnummer");
var behandeling = url.searchParams.get("keuze_behandeling");
var kapper = url.searchParams.get("keuze_kapper");

var om = "om";
var omBold = om.bold();

var dateTime = url.searchParams.get("datum_tijd");
dateTime = dateTime.split(" ");
let datum = dateTime[0];
let tijd = dateTime[1];
datum = datum.split('-');
dateTime = datum[2] + "-" + datum[1] + "-" + datum[0] + " " + omBold + " " + tijd;

// gegevens neerzetten
var voornaamBe = document.getElementById("voornaam_be");
var achternaamBe = document.getElementById("achternaam_be");
var emailBe = document.getElementById("email_be");
var telefoonnummerBe = document.getElementById("telefoonnummer_be");
var behandelingBe = document.getElementById("behandeling_be");
var kapperBe = document.getElementById("kapper_be");
var datum_tijdBe = document.getElementById("datum_tijd_be");


voornaamBe.innerHTML = voornaam;
achternaamBe.innerHTML = achternaam;
emailBe.innerHTML = email;
telefoonnummerBe.innerHTML = telefoonNum;
behandelingBe.innerHTML = behandeling;
kapperBe.innerHTML = kapper;
datum_tijdBe.innerHTML = dateTime;