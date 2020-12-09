var geraten = '_______________________________________________________';
var wort = '';	// Zu erratendes Wort
var fehler = 0;

while (wort.length < 6) {
	wort = wortliste[Math.floor(Math.random() * wortliste.length)];
}

console.log(wort);

function pruefeEingabe(bs) {
	var gefunden = false;
	
	console.log(bs);
	console.log(wort);
	for (var i=0;i<wort.length;i++){
		if (wort.toLowerCase().substr(i, 1)==bs.toLowerCase()) { 
			geraten = geraten.substr(0, i) + bs + geraten.substr(i+1, geraten.length - (i+1));
			gefunden = true;
		}
	}
	gesuchtesWortAktualisieren(geraten);
	
	if (geraten.indexOf('_') < 0) {
		alert('Richtig! Das gesuchte Wort ist: ' + geraten);
		return true;
	}
	
	console.log(geraten);
	if (!gefunden) {
		fehler++;
	}
	bildAktualisieren(fehler);
	if (fehler === 11) {
		window.setTimeout(gameOver, 50);
	}
	return gefunden;
}   

function gameOver()	{
	document.getElementById('eingabe').disabled = true;
	gesuchtesWortAktualisieren(wort);
	alert('Du hast zu oft falsch geraten - Das Spiel ist aus!');
}

function bildAktualisieren(bildNr) {
	document.getElementById('bildGalgen').src = 'bilder/bild' + bildNr + '.png';
}

function gesuchtesWortAktualisieren(wort) {
	document.getElementById('gesuchtesWort').innerHTML = wort;
}


geraten = geraten.substr(0, wort.length);
