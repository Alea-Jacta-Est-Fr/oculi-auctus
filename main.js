
document.addEventListener("keypress", moveTarget);



function moveTarget(){

rayon = 2;

newX = Math.random(rayon)-rayon/2;
newZ = Math.random(rayon)-rayon/2;

// document.getElementById('mon-plan').position = newX+" "+0+" "+newZ;
document.getElementById('movingTarget').setAttribute('position', {x: newX,  y: 0.15,  z: newZ});

}

