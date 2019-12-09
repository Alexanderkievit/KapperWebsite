let vrouwBehandeling = document.getElementById('vrouw_choise');
let manBehandeling = document.getElementById('man_choise');
let overigBehandeling = document.getElementById('overig_choise');
let behandelingKeuze = document.getElementById('behandeling_optie');
let kapperKeuze = document.getElementById('kapper_optie');
let vrouw = document.getElementById('vrouw');
let man = document.getElementById('man');
let overig = document.getElementById('overig');

manBehandeling.hidden = true;
overigBehandeling.hidden = true;
behandelingKeuze.hidden = true;
kapperKeuze.hidden = true;
vrouwBehandeling.hidden = true;

vrouw.onchange = function() {
    behandelingKeuze.hidden = false;
    vrouwBehandeling.hidden = false;
    manBehandeling.hidden = true;
    overigBehandeling.hidden = true;
}

man.onchange = function() {
    behandelingKeuze.hidden = false;
    manBehandeling.hidden = false;
    vrouwBehandeling.hidden = true;
    overigBehandeling.hidden = true;
}

overig.onchange = function() {
    behandelingKeuze.hidden = false;
    overigBehandeling.hidden = false;
    vrouwBehandeling.hidden = true;
    manBehandeling.hidden = true;
}
