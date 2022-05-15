class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","enter your name")
this.playButton=createButton("Play")
this.titleImg=createImg("assets/title.png","gametitle")
this.greeting=createElement("h2")




  }
  setElementsPosition() {
    this.titleImg.position(120, 100);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  handleMousePressed(){
    this.playButton.mousePressed(
   ()=>{
this.input.hide()
this.playButton.height()
var message = `Hello ${this.input.value()}
</br>Wait for another player to join`
this.greeting.html(message)


    }

    )
  }

display(){
  this.setElementsPosition()
  this.handleMousePressed()
}




}

