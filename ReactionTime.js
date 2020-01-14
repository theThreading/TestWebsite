var time1 = 0.0;
var time2 = 0.0;
var Reaction = 0.0;
setTimeout(MakeShapeAppear, 1000);


function MakeShapeAppear() {
  time1 = new Date().getSeconds();
  document.getElementById('RandomShape').style.display = "inline-block";
  document.getElementById('RandomShape').style.top = Math.floor((Math.random() * 300) + 1) + 'px';
  document.getElementById('RandomShape').style.left = Math.floor((Math.random() * 300) + 1) + 'px';
  document.getElementById('RandomShape').style.right = Math.floor((Math.random() * 300) + 1) + 'px';
  document.getElementById('RandomShape').style.bottom = Math.floor((Math.random() * 300) + 1) + 'px';
  document.getElementById('RandomShape').style.height = Math.floor((Math.random() * 300) + 1) + 'px';
  document.getElementById('RandomShape').style.width = Math.floor((Math.random() * 300) + 1) + 'px';
  document.getElementById('RandomShape').style.borderRadius = Math.floor((Math.random() * 100) + 1) + '%';
  document.getElementById('RandomShape').style.backgroundColor = 'rgb(' + ((Math.random() * 255) + 1) + ',' + ((Math.random() * 255) + 1)+ ',' + ((Math.random() * 255) + 1) + ')';
}

function CalculateReactionTime(){
  time2 = new Date().getSeconds();
  Reaction = time2 - time1;
  document.getElementById('ReactionTime').innerHTML = Reaction;
  document.getElementById('RandomShape').style.display = "none";
  setTimeout(MakeShapeAppear, 1000);
}
