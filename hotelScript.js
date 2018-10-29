var selector = 0;
var count = [0, 0, 0, 0, 0, 0];
var logT = [0, 0, 0, 0, 0, 0];
var max = 4;
var bG = ["https://stmed.net/sites/default/files/hotel-wallpapers-28644-2385182.jpg", "https://wetu.com/Resources/1159/Lobby.jpg", "http://hotelkakanyero.com/wp-content/uploads/2015/11/hotel-las-vegas-home-designs-hotel-las-vegas-25409.jpg", "https://cdn.hipwallpaper.com/i/26/93/Indk8J.jpg"];



function change() {
  var rand = Math.floor(Math.random() * bG.length);
  document.body.style.backgroundImage = "url(" + bG[rand] + ")";
}
var timeBG = setInterval(change, 5000);

function selOne() {
  selector = 0;
}
function selTwo() {
  selector = 1;
}
function selTre() {
  selector = 2;
}
function selFor() {
  selector = 3;
}
function selFiv() {
  selector = 4;
}
function selSix() {
  selector = 5;
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
  var i = max;
  var ii = 0;
  var x = document.getElementsByTagName('li')[0 + (max * selector)].innerHTML;
  var y = document.getElementsByTagName('li')[1 + (max * selector)].innerHTML;
  var z = document.getElementsByTagName('li')[2 + (max * selector)].innerHTML;
  var w = document.getElementsByTagName('li')[3 + (max * selector)].innerHTML;
  var ul = document.getElementsByClassName('chek')[selector];
  var li;
  var d = new Date();
  var day = d.getDate() + ", ";
  var weDay = d.getDay();
  var weDayList = ["Mon.", "Tues.", "Wen.", "Thur.", "Fri.", "Sat.", "Sun."];
  var weDayFin = weDayList[weDay] + " ";
  var hour = d.getHours();
  var min = d.getMinutes();
  var time = 0;
  var timeList = ["AM", "PM"];
  
  if (hour > 12) {hour = hour - 12;time = 1;}
  else if (hour < 12) {time = 0;}
  
  var timeFin = timeList[time];
  
  if (count[selector] != -1) {
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
      var nTxt = document.createTextNode(t + " checked in at " + weDayFin + day + hour + ":" + min + " " + timeFin);
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
      document.getElementsByClassName('remove')[selector].style.display = "block";
    }
    if (count[selector] === 0) {
      document.getElementsByClassName('remove')[selector].style.display = "none";
    }
    if (count[selector] === max) {
      document.getElementsByClassName('display')[selector].style.backgroundColor = "#B48B7D";
    }
  }
  document.getElementsByClassName('inIn')[selector].value = "";
}



function rmv() {
  var i = document.getElementsByClassName('inOut')[selector].value - 1;
  var ul = document.getElementsByClassName('chek')[selector];
  
  if (i < 0 || i > max) {}
  else if (i >= 0 && count[selector] != -1) {
    var elem = document.createElement('li');
    var il = document.getElementsByTagName('li')[0 + (max * selector) + i];
    ul.removeChild(il);
    count[selector] = count[selector] - 1;
    ul.appendChild(elem);
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#FFF9A5";
  }
  if (count[selector] === 0) {
    document.getElementsByClassName('remove')[selector].style.display = "none";
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
    document.getElementsByClassName('remove')[selector].style.display = "none";
    document.getElementsByClassName('display')[selector].style.backgroundColor = "#FFF9A5";
  }
  
}
