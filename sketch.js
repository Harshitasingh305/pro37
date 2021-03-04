var canvas;
 var gameState=0;
 var contestantCount, database, quiz, question,contestant 
var allContestants;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz1=new Quiz()
  quiz1.start()
  quiz1.getState()

}


function draw(){
  background("pink");
if(contestantCount===4){
	quiz1.update(1)
	 
    quiz1.play()
    

  
}
}