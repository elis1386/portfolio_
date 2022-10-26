let click = 0;
let text1 = "I choose a dog";
let text2 = "I choose a cat";
function changePhoto() {
  let image1 = document.querySelector("img");
  if (click % 2 == 0) {
    image1.setAttribute("src", `images/2.jpeg`);
    document.getElementById("btn").innerText = text2;
    document.getElementById("btn").style.backgroundColor = "#80A7B8";
  click++;

  } else {
    image1.setAttribute("src", `images/1.jpeg`);
    document.getElementById("btn").innerText = text1;
    document.getElementById("btn").style.backgroundColor = "#ECB605 ";
  click++;

  }
}
