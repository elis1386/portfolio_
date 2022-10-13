let fontSize = 16;

function changeFont() {
  fontSize = fontSize + 4;
  document.body.style.fontSize = fontSize + "px";
  if (fontSize === 32) {
    return (fontSize = 12);
  }
  const list = document.getElementsByTagName('li')
  const text = list.getAttribute('title')
  let description = document.getElementById('description')
  description.nodeValue = text
  console.log(fontSize);
}
