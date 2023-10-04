function volume_sphere() {
    //Write your code here
	let boxes = document.getElementsByTagName("input");
	let r = boxes[0].value;
	let volume = boxes[1];
	volume.value = (4*3.14*(r**3))/3;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
