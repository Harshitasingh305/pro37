class Question {

  constructor() {
    this.input = createInput("Name");
    this.input2=createInput("Option")
    this.button = createButton('submit');
   
  this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
display(){
	 var title = createElement('h2')
title.html("MyQuizGame")
title.position(350,0)

var question=createElement('h3')
question.html("Question:What starts and end with the letter E,but has only one letter?")
question.position(100,80)

var option1=createElement('h4')
option1.html("1:Everyone")
option1.position(150,130)

var option2=createElement('h4')
option2.html("2:Envelope")
option2.position(150,150)

var option3=createElement('h4')
option3.html("3:Estimate")
option3.position(150,170)

var option4=createElement('h4')
option4.html("4:Example")
option4.position(150,190)

this.input.position(300,300)
this.input2.position(500,300)
 this.button.position(400, 380);

   this.button.mousePressed(()=>{

      
      this.button.hide();
      contestant.name = this.input.value();
      contestant.answer=this.input2.value()
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
      
    
    });
}


}