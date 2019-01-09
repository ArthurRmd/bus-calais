function timeToInt (){
	var time = new Date();
	var heure = time.getHours();
	var minute = time.getMinutes();
	var nombre = (heure * 100) + minute;
	return nombre;
}


function creationTableauHeure( tableau){
	var tailleTableau = tableau.length;
	var heure = timeToInt();
	var texte = "";
	var tableauRetour = []
	
	
	for( var i = 0; i<tailleTableau ; i++){

		if (heure <= tableau[i]) {

			if (tableau[i] < 1000) {
				texte = tableau[i].toString();
				texte = texte.slice(0,1) + ":" + texte.slice(1, 3);
				
			}
			else{
			texte = tableau[i].toString();
			texte = texte.slice(0,2) + ":" + texte.slice(2, 4);
			}
			tableauRetour.push(texte);
			
		}
				
	}

	return tableauRetour;

}

function ajoutHeure(nomArret, tableauBus) {
	for( var i = 0; i<tableauBus.length ; i++){
		$(nomArret).append('<h6>'+ tableauBus[i] + '</h6>');
	}
}

function afficheArret(nomArret, tableau) {
	var tab = creationTableauHeure(tableau)
	ajoutHeure(nomArret,tab)
}


$(document).ready(function(){



})
