let fontSize = 16;

function changeFont() {

  if (fontSize === 32) {
      fontSize = 12;
  }
  fontSize = fontSize + 4;
  document.body.style.fontSize = fontSize + "px";
  
  showCurrentSize() 

  console.log(fontSize);
}
function showCurrentSize() {
  document.getElementById("font-text-koko").innerHTML = `Current font-size ${fontSize} px`
} 
