let imgs = document.getElementsByClassName('img-dis')
let playBtn = document.getElementById('play-btn');
let currentActive = document.getElementsByClassName("active");

for (i=0; i < imgs.length; ++i) {
  imgs[i].addEventListener('click', function () {
    if (currentActive.length > 0) { 
      currentActive[0].className = currentActive[0].className.replace(" active", "");
    }
    this.className += " active";
    document.getElementById('option').style.display = 'block'
    document.getElementById('message').innerHTML = ''
    document.getElementById('option').innerHTML = `You picked ${currentActive[0].id}`
    computerChoice = aiChoice()
    document.getElementById('ai-option').innerHTML = `Computer picked ${computerChoice}`
    score(winner(currentActive[0].id, computerChoice))
    }
  )
}
// if (roundCount == 5) {
// }
// selectedOption = currentActive[0].id

function displayOverlay() {
  document.getElementById('game-screen').style.height = '100vh';
  document.getElementById('img-div').style.display = 'flex';
  document.getElementById('scores').style.display = 'block';
  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('ai-option').style.display = 'none'
}

function aiChoice() {
  choice = ['rock', 'paper', 'scissors']
  value = Math.floor(Math.random() * 3)
  document.getElementById('ai-image').style.display = `block`
  document.getElementById('ai-option').style.display = 'block'
  document.getElementById('ai-image').src = `./images/${choice[value]}.png`
  return choice[value]
}

function winner(playerChoice, aiChoice) {
  if (playerChoice == 'rock' && aiChoice == 'paper') {
     return 'computer'
  }
  else if(playerChoice == 'paper' && aiChoice == 'rock') {
    return 'player'
  }
  else if(playerChoice == 'scissors' && aiChoice == 'rock') {
    return 'computer'
  }
  else if(playerChoice == 'rock' && aiChoice == 'scissors') {
    return 'player'
  }
  else if(playerChoice == 'scissors' && aiChoice == 'paper') {
    return 'player'
  }
  else if(playerChoice == 'paper' && aiChoice == 'scissors') {
    return 'computer'
  }
  else if(playerChoice == aiChoice) {
    return 'tie'
  }
}

function score(winner) {
  player_current_score = parseInt(document.getElementById('human-score').innerHTML)
  ai_current_score = parseInt(document.getElementById('computer-score').innerHTML)

  if (player_current_score + ai_current_score >= 5 ) {
    document.getElementById('gameover-screen').style.display = 'flex'
    document.getElementById('img-div').style.display = 'none'
    if (ai_current_score > player_current_score){
      document.getElementById('winner').innerHTML = 'You lost this round. Better luck next time!'
    }
    else if (ai_current_score < player_current_score){
      document.getElementById('winner').innerHTML = 'You Won this round. Good job!'
    }
    else if (ai_current_score == player_current_score){
      document.getElementById('winner').innerHTML = 'It was a tie!'
    }
  }
  if (winner == 'player'){
    document.getElementById('human-score').innerHTML = player_current_score + 1
    document.getElementById('message').innerHTML = `Player Won!`
  }
  else if (winner == 'computer'){
    document.getElementById('computer-score').innerHTML = ai_current_score + 1
    document.getElementById('message').innerHTML = `Computer Won!`
  }
  else if (winner == 'tie'){
    document.getElementById('message').innerHTML = "It's a tie!"
  }
}
function reset(){
  document.getElementById('game-screen').style.height = 0;
  document.getElementById('main-screen').style.display = 'flex';
  document.getElementById('scores').style.display = 'none';
  document.getElementById('option').style.display = 'none'
  document.getElementById('ai-option').style.display = 'none'
  document.getElementById('gameover-screen').style.display = 'none'
  document.getElementById('ai-image').style.display = `none`
  document.getElementById('computer-score').innerHTML = 0
  document.getElementById('human-score').innerHTML = 0
  document.getElementById('message').innerHTML = ''
  document.getElementById('option').innerHTML = ''
  document.getElementById('ai-option').innerHTML = ''
  currentActive[0].className = currentActive[0].className.replace(" active", "");
}
function replay() {
  document.getElementById('img-div').style.display = 'flex'
  currentActive[0].className = currentActive[0].className.replace(" active", "");
  document.getElementById('option').style.display = 'none'
  document.getElementById('ai-option').style.display = 'none'
  document.getElementById('gameover-screen').style.display = 'none'
  document.getElementById('ai-image').style.display = `none`
  document.getElementById('computer-score').innerHTML = 0
  document.getElementById('human-score').innerHTML = 0
  document.getElementById('message').innerHTML = ''
  document.getElementById('option').innerHTML = ''
  document.getElementById('ai-option').innerHTML = ''
  
}
