

let fontFamily = 'fantasy'
const fontsArray = ['Roboto', 'Mansala', 'Grenze', 'Turret Road', 'Fantasy']
let click = 0

function changeFamily()
{
    fontFamily = document.body.style.fontFamily = fontsArray[click % 5];
    click++
    console.log(fontFamily);
}