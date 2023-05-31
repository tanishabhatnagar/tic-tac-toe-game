var player1=document.getElementById("player1");
var player2=document.getElementById("player2");
var gamebox=document.getElementById("gamebox");
var form=document.getElementById("form");
var xUserBtn=document.getElementById("xUserBtn");
var oUserBtn=document.getElementById("oUserBtn");
var td=document.getElementsByTagName("td");
var resultbox=document.getElementsByClassName("resultbox")[0];
var winChange = document.getElementById("winChange");
var winningHeading = document.getElementById("winningHeading");




function start(){
    if(player1.value && player2.value){
    form.setAttribute("class","hide");
    gamebox.classList.remove("hide");
    xUserBtn.innerHTML=player1.value+" (X)";
    oUserBtn.innerHTML=player2.value+" (O)";
    xUser();
    }
    else{
        alert("enter your names first");
    }


}

function xUser() {
    xUserBtn.style.backgroundColor = "cyan";
    oUserBtn.style.backgroundColor = "white";
    for (let i = 0; i < td.length; i++) {
      if (td[i].innerHTML === "") {
        td[i].setAttribute("onclick", "tickX(this)");
      }
    }
  }
  
  function oUser() {
    oUserBtn.style.backgroundColor = "cyan";
    xUserBtn.style.backgroundColor = "white";
    for (let i = 0; i < td.length; i++) {
      if (td[i].innerHTML === "") {
        td[i].setAttribute("onclick", "tickO(this)");
      }
    }
  }
  


  function tickX(e) {
    e.innerHTML = "X";
    e.style.color = "violet";
    e.classList.add("tdDisable");
  
    var xWin = false;
  
    
    if (
      (td[0].textContent === "X" && td[1].textContent === "X" && td[2].textContent === "X") ||
      (td[3].textContent === "X" && td[4].textContent === "X" && td[5].textContent=== "X") ||
      (td[6].textContent === "X" && td[7].textContent === "X" && td[8].textContent === "X") ||
      (td[0].textContent=== "X" && td[3].textContent === "X" && td[6].textContent === "X") ||
      (td[2].textContent === "X" && td[5].textContent === "X" && td[8].textContent === "X") ||
      (td[0].textContent === "X" && td[4].textContent === "X" && td[8].textContent === "X") ||
      (td[2].textContent === "X" && td[4].textContent === "X" && td[6].textContent === "X")||
      (td[1].textContent === "X" && td[4].textContent === "X" && td[7].textContent === "X")
      

    ) {
      xWin = true;
    }
  
    if (xWin) {
      gamebox.classList.add("hide");
      resultbox.classList.remove("hide");
      winChange.innerHTML = player1.value + ' <strong style="font-weight: bold; color: red;">wins!</strong>';
      
      return;
    }
  
    
    var draw = true;
    for (let i = 0; i < td.length; i++) {
      if (td[i].innerHTML === "") {
        draw = false;
        break;
      }
    }
  
    if (draw) {
      gamebox.classList.add("hide");
      resultbox.classList.remove("hide");
      winChange.innerHTML = "No one";
      winningHeading.innerHTML = "Match draw";
    }
  
    oUser();
  }

  function tickO(e) {
    e.innerHTML = "O";
    e.style.color = "red";
    e.classList.add("tdDisable");
  
    var oWin = false;
  
    
    if (
      (td[0].textContent === "O" && td[1].textContent === "O" && td[2].textContent === "O") ||
      (td[3].textContent === "O" && td[4].textContent === "O" && td[5].textContent === "O") ||
      (td[6].textContent === "O" && td[7].textContent === "O" && td[8].textContent === "O") ||
      (td[0].textContent === "O" && td[3].textContent === "O" && td[6].textContent === "O") ||
      (td[2].textContent === "O" && td[5].textContent === "O" && td[8].textContent === "O") ||
      (td[0].textContent === "O" && td[4].textContent === "O" && td[8].textContent === "O") ||
      (td[2].textContent === "O" && td[4].textContent === "O" && td[6].textContent === "O") ||
      (td[1].textContent === "O" && td[4].textContent === "O" && td[7].textContent === "O")

    ) {
      oWin = true;
    }
  
    if (oWin) {
      gamebox.classList.add("hide");
      resultbox.classList.remove("hide");
      winChange.innerHTML = player2.value + ' <strong style="font-weight: bold; color: red;">wins!</strong>';
      
      return;
    }
  
    
    var draw = true;
    for (let i = 0; i < td.length; i++) {
      if (td[i].innerHTML === "") {
        draw = false;
        break;
      }
    }
  
    if (draw) {
      gamebox.classList.add("hide");
      resultbox.classList.remove("hide");
      winChange.innerHTML = "No one";
      winningHeading.innerHTML = "Match draw";
    }
  
    xUser();
  }
  
  
  