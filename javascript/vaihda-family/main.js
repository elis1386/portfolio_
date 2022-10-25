

let fontFamily = 'fantasy'
const fontsArray = ['Roboto', 'Mansala', 'Grenze', 'Turret Road', 'Fantasy']
let click = 0

function changeFamily()
{
    fontFamily = document.body.style.fontFamily = fontsArray[click % 5];
    console.log(click)
    click++
  
    console.log(fontFamily);


  showCurrentFamily() 
}
function showCurrentFamily() {
  document.getElementById("font-text-family").innerHTML = `Current font-family ${fontFamily}`
}