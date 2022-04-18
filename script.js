var playerScore = 0
var iaScore = 0

function play(player){
  var ia = Math.floor (Math.random()*3)

  var ganhador =""
  //Ia Ganha
  if( (ia == 0 && player == 2) || (ia == 1 && player == 0) || (ia == 2 && player == 1)){
    ganhador = "IA"
    iaScore++
  }
  else if (ia == player)
  {
    ganhador = "Ninguém"
  }
  else
  {
    ganhador = "PLAYER"
    playerScore++
  }
  var p1 = document.getElementById("winner")
    p1.ineerHTML = ganhador + "ganhou."
  var p2 = document.getElementById("score")
  p2.innerHTML = "PLAYER: " + playerScore + " X " + iaScore + " : IA"
  
}