
document.addEventListener("keypress", moveTarget);

// init();
/*
Pourquoi pas une function qui permettrait de placer ne manière "aléatoire" les 
targets du plateau ?

*/


function moveTarget(){

newX = 0;
newZ = 0;

// document.getElementById('mon-plan').position = newX+" "+0+" "+newZ;
document.getElementById('movingTarget').setAttribute(
	'position', 
	{x: newX,  y: 0.15,  z: newZ}
);

}

// function init(){

// 	arrayOfMarker = [
// 	'pattern-x0',
// 	'pattern-x1',
// 	'pattern-x2',
// 	'pattern-x5',
// 	'pattern-x10',
// 	'pattern-joker'
// 	];
	
// 	htmlToAdd = '';

// 	for (var i = arrayOfMarker.length - 1; i >= 0; i--) {
// 		htmlToAdd += '<a-marker type="pattern" url="ressources/patterns/'+arrayOfMarker[i]+'.patt"><a-plane position="0 0.15 0" rotation="-90 0 0" scale="1 1 1" material="src:#target; transparent: true; opacity:1"></a-plane></a-marker>';
// 	}

// 	document.getElementById('main-scene').innerHTML += htmlToAdd;

// }

