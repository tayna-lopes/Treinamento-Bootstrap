function openCity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

function more1() {
    document.getElementById("num1").stepUp(1);
    document.getElementById("ARTnum1").stepUp(1);
  }

function more2() {
    document.getElementById("num2").stepUp(1);
    document.getElementById("GENnum2").stepUp(1);
  }

function more3() {
    document.getElementById("num3").stepUp(1);
    document.getElementById("ARTnum3").stepUp(1);
  }

function more4() {
    document.getElementById("num4").stepUp(1);
    document.getElementById("GENnum4").stepUp(1);
  }





