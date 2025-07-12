// global variables
let playerName = '', winningHouse = '';
let playerScore = 0;
let gameTargets = [];

document.addEventListener('DOMContentLoaded', () => {
  console.log("Game script loaded");

  // 1. Initialize the game
  initializeGame();

  // event to submit their name
  document.getElementById("submitPlayerName").addEventListener("click", () => { greetPlayer() });

  // event to play the game
  $('#playGame').on('click', () => {
    $('#goBox').addClass('d-flex').show();
    $('#gamePiece').show();
    $('#nameBox').removeClass('d-flex').hide();
    $('#playGame').prop('disabled', true);
  });

  // event to play again
  $('#playAgain').on('click', () => {
    $('#gamePiece').css({ left: 0, top: 0 });
    setHomePlanet();
    $('#gamePiece').draggable({ disabled: false });
    $('.gameTargets').text('');
  });

  // event to reset the game
  $('#resetGame').on('click', () => {
    initializeGame();
    $('#gamePiece').css({ left: 0, top: 0 });
    $('.gameTargets').text('');
    $('#playerScore').text('0');
  });

  // draggable
  $("#gamePiece").draggable({
    containment: "#gameBoard",
    scroll: true,
    snap: ".gameTargets",
    snapMode: "inner",
    snapTolerance: 60
  });

  // droppable
  $('.gameTargets').droppable({
    accept: "#gamePiece",
    drop: function () {
      if ($(this).attr('id') === $(gameTargets[winningHouse]).attr('id')) {
        playerScore++;
        $(this).text('You Win! :D');
      } else {
        playerScore--;
        $(this).text('You Lose. :(');
      }

      $('#playerScore').text(playerScore);
      $('#playAgain').show();
      $('#gamePiece').draggable({ disabled: true });
    }
  });

});

// hide all controls from the start
function initializeGame() {

  // hide the game piece
  $('#gamePiece').hide().css('display', 'none');

  // hide the controls except for the first one (input name)
  $('#inputBox').addClass('d-flex').show();
  $('#nameBox').removeClass('d-flex').hide();
  $('#goBox').removeClass('d-flex').hide();
  $('#playAgain').hide();

  // ensure the play button is not disabled
  $('#playGame').prop('disabled', false);

  setHomePlanet();
  playerScore = 0;
  $('#playerName').val('');
  $('#enteredPlayerName').val('').attr('placeholder', 'What\'s your name?');
  $('#displayPlayerName').text('');
  playerName = '';
}

function setHomePlanet() {
  gameTargets = document.getElementsByClassName('gameTargets');
  // winning house is assigned random number (0,1,2)
  winningHouse = Math.floor(Math.random() * gameTargets.length);
  console.log($(gameTargets[winningHouse]).attr('id'));
}

function greetPlayer() {
  const enteredPlayerName = $('#enteredPlayerName').val();
  if (enteredPlayerName) {
    playerName = enteredPlayerName; // update global playerName
    $('#displayPlayerName').prepend(`Get ready to help the rocket, ${enteredPlayerName}!`);
    $('#enteredPlayerName').val('');

    // acknowledges their name & no red border
    $('#enteredPlayerName').attr('placeholder', 'Cool!').removeClass('redBorder');

    $('#nameBox').addClass('d-flex').show();
    $('#inputBox').removeClass('d-flex').hide();

    $('#playGame').show();
  }
  else {
    console.log("no player name");
    // if no name is entered, show a red border
    $('#enteredPlayerName').attr('placeholder', 'Please enter your name!').addClass('redBorder').focus();
    $('#displayPlayerName').text('');
    $('#playGame').hide();
  }
}
