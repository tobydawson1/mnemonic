function removeLost() {
  let element = document.getElementById("animationhere");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export default function youLost() {
  let node = document.createElement("H1");
  let winthing = document.createTextNode("you lost :(")
  node.appendChild(winthing);  
  document.getElementById('animationhere').appendChild(node);
  setTimeout(removeLost, 3000);
};

