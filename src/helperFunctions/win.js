function removeWin() {
    let element = document.getElementById("animationhere");
      while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  
  export default function youWin() {
    let node = document.createElement("H1");
    let winthing = document.createTextNode("you win!!")
    node.appendChild(winthing);  
    document.getElementById('animationhere').appendChild(node);
    setTimeout(removeWin, 3000);
  };

  