let click = 0;
let text1 = "I choose a dog";
let text2 = "I choose a cat";
function changePhoto() {
  let image1 = document.querySelector("img");
  let button = document.getElementById("btn");
  if (click % 2 == 0) {
    image1.setAttribute("src", 'images/2.jpeg');
    button.innerText = text2;
    button.style.backgroundColor = "#80A7B8";
    click++;
  } else {
    image1.setAttribute("src",'images/1.jpeg');
    button.innerText = text1;
    button.style.backgroundColor = "#ECB605 ";
    click++;
  }
}
