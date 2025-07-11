console.log("Game script loaded");

//https://www.w3schools.com/howto/howto_js_draggable.asp
//https://jqueryui.com/draggable/

$(document).ready(function(){
  $("#gamePiece").draggable({
    containment: "#gameBoard",
    scroll: true,
    snap: ".gameTargets",
    snapMode: "inner",
    snapTolerance: 60
  });
});

$('.gameTargets').droppable({
  accept: "#gamePiece",
  drop: function(event, ui) {
    $(this)
    console.log("Game piece dropped on target!" + $(this).attr('class'));
  }
});
