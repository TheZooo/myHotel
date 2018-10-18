var selector = 0;
var count = [0, 0, 0, 0, 0, 0];

function selOne() {
  selector = 0;
}


function lock() {
  var div = document.getElementsByClassName('display')[selector];
  if (count[selector] === 0) {
    count[selector] = count[selector] - 1;
    var elem = document.createElement('h1');
    var txt = document.createTextNode("Closed For Cleaning");
    elem.appendChild(txt);
    div.appendChild(elem);
    document.getElementsByClassName('clean')[selector].innerHTML = "Open from Cleaning";
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#B48B7D";
  }
  else if (count[selector] === -1) {
    count[selector] = count[selector] + 1;
    var h = document.getElementsByTagName('h1')[selector];
    div.removeChild(h);
    document.getElementsByClassName('clean')[selector].innerHTML = "Close for Cleaning";
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#FFF9A5";
  }
}

function add() {
  var t = document.getElementsByClassName('inIn')[selector].value;
  
  if (t === "") {}
  
  else if (count[selector] < 4 && count[selector] > 0) {
    var elem = document.createElement('li');
    var nTxt = document.createTextNode(t + " checked in");
    var ul = document.getElementsByClassName('chek')[selector];
    elem.appendChild(nTxt);
    ul.appendChild(elem);
    count[selector] = count[selector] + 1;
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#FFF9A5";
  }
  
  if (count[selector] >= 0) {
    document.getElementsByClassName('remove')[selector].style.visibility = "visible";
  }
  
  if (count[selector] === 0) {
    document.getElementsByClassName('remove')[selector].style.visibility = "hidden";
  }
  
  if (count[selector] === 4) {
    document.getElementsByClassName('inIn')[selector].value = "";
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#B48B7D";
  }
  document.getElementsByClassName('inIn')[selector].value = "";
}

function rmv() {
  var i = document.getElementsByClassName('inOut')[selector].value - 1;
  var ul = document.getElementsByClassName('chek')[selector];
  window.alert(i);
  
  if (i < 0 || i > 4) {}
  else if (i >= 0) {
    var il = document.getElementsByTagName('li')[0 + (4 * selector) + i];
    ul.removeChild(il);
    
    count[selector] = count[selector] - 1;
  }
  if (count[selector] === 0) {
    document.getElementsByClassName('remove')[selector].style.visibility = "hidden";
  }
  document.getElementsByClassName('inOut')[selector].value = "";
  document.getElementsByClassName('display')[selector].style.backgroundColor = "#FFF9A5";
}

function rmvAll() {
  var i = 0;
  var amt = count[selector];
  var ul = document.getElementsByClassName('chek')[selector];
  
  for (i; i <= amt; i++) {
    var il = document.getElementsByTagName('li')[0 + (4 * selector)];
    window.alert(4 * selector);
    ul.removeChild(il);
    count[selector] = 0;
    document.getElementsByClassName('remove')[selector].style.visibility = "hidden";
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#FFF9A5";
  }
  
}
