function volume_sphere() {
    //Write your code here
	let radius = document.querySelector("#radius");
	let volume = document.querySelector("#volume");
	let r = radius.value;
	let v = (4*Math.PI*(r**3))/3;
	volume.value = v;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
