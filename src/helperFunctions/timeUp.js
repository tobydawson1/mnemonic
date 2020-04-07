function removeTimeUp() {
    let element = document.getElementById("animationhere");
      while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  
  export default function timeUp() {
    let node = document.createElement("H1");
    let winthing = document.createTextNode("time's up! :(")
    node.appendChild(winthing);  
    document.getElementById('animationhere').appendChild(node);
    setTimeout(removeTimeUp, 3000);
  };
  
  