function docker() {
    var i = document.getElementById("inp").value;
    var xhr = new XMLHttpRequest();
  
    xhr.open("GET", "http://192.168.43.210/cgi-bin/main.py?cmd="+i, true);
    xhr.send();
    xhr.onload = function () {
      var output = xhr.responseText;
      document.getElementById("d1").innerHTML = output;
    };
  }
