var selector = 0;
var count = [0, 0, 0, 0, 0, 0];
var max = 4;

function selOne() {
  selector = 0;
}


function lock() {
  var div = document.getElementsByClassName('display')[selector];
  if (count[selector] === 0) {
    count[selector] = count[selector] - 1;
    document.getElementsByTagName('h1')[selector].style.display = "block";
    document.getElementsByClassName('clean')[selector].innerHTML = "Open from Cleaning";
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#B48B7D";
  }
  else if (count[selector] === -1) {
    count[selector] = count[selector] + 1;
    document.getElementsByTagName('h1')[selector].style.display = "none";
    document.getElementsByClassName('clean')[selector].innerHTML = "Close for Cleaning";
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#FFF9A5";
  }
}



function add() {
  var t = document.getElementsByClassName('inIn')[selector].value;
  var i = document.getElementsByTagName('li').length;
  var ii = 0;
  var x = document.getElementsByTagName('li')[0 + (max * selector)].innerHTML;
  var y = document.getElementsByTagName('li')[1 + (max * selector)].innerHTML;
  var z = document.getElementsByTagName('li')[2 + (max * selector)].innerHTML;
  var w = document.getElementsByTagName('li')[3 + (max * selector)].innerHTML;
  var ul = document.getElementsByClassName('chek')[selector];
  var li;
  
  for (x,i; x === "" && i > 0; i--) {
    if (x === "") {
      li = document.getElementsByTagName('li')[0 + (max * selector)];
      ul.removeChild(li);
    }
  }
  for (y,i; y === "" && i > 1; i--) {
    if (y === "") {
      li = document.getElementsByTagName('li')[1 + (max * selector)];
      ul.removeChild(li);
    }
  }
  for (z,i; z === "" && i > 2; i--) {
    if (z === "") {
      li = document.getElementsByTagName('li')[2 + (max * selector)];
      ul.removeChild(li);
    }
  }
  if (w === "" && i > 3) {
    li = document.getElementsByTagName('li')[3 + (max * selector)];
    ul.removeChild(li);
  }

  if (t === "") {}
  else if (count[selector] < max && count[selector] >= 0) {
    var elem = document.createElement('li');
    var nTxt = document.createTextNode(t + " checked in");
    elem.appendChild(nTxt);
    ul.appendChild(elem);
    count[selector] = count[selector] + 1;
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#FFF9A5";
  }
  
  for (ii; ii < (max - count[selector]);ii++) {
    var mlem = document.createElement('li');
    ul.appendChild(mlem);
  }
  
  if (count[selector] > 0) {
    document.getElementsByClassName('remove')[selector].style.visibility = "visible";
  }
  if (count[selector] === 0) {
    document.getElementsByClassName('remove')[selector].style.visibility = "hidden";
  }
  if (count[selector] === max) {
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#B48B7D";
  }
  document.getElementsByClassName('inIn')[selector].value = "";
}



function rmv() {
  var i = document.getElementsByClassName('inOut')[selector].value - 1;
  var ul = document.getElementsByClassName('chek')[selector];
  
  if (i < 0 || i > max) {}
  else if (i >= 0) {
    var elem = document.createElement('li');
    var il = document.getElementsByTagName('li')[0 + (max * selector) + i];
    ul.removeChild(il);
    count[selector] = count[selector] - 1;
    ul.appendChild(elem);
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#FFF9A5";
  }
  if (count[selector] === 0) {
    document.getElementsByClassName('remove')[selector].style.visibility = "hidden";
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#FFF9A5";
  }
  document.getElementsByClassName('inOut')[selector].value = "";
  
}



function rmvAll() {
  var i = 0;
  var ul = document.getElementsByClassName('chek')[selector];
  
  for (i; i <= max; i++) {
    var li = document.getElementsByTagName('li')[0 + (max * selector)];
    var elem = document.createElement('li');
    ul.removeChild(li);
    ul.appendChild(elem);
    count[selector] = 0;
    document.getElementsByClassName('remove')[selector].style.visibility = "hidden";
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#FFF9A5";
  }
  
}
