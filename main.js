
document.addEventListener("keypress", moveTarget);


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


