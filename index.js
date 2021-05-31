

var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (i=0; i<numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick (){

    // this.style.color ="white";
    var buttonInnerHTML= this.innerHTML;

    // makeSound(buttonInnerHTML); - this would help if we deleted the whole switch statement.

    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;


      default:console.log();



    }
   buttonAnimation(buttonInnerHTML);
 }

 //
  // document.addEventListener("keypress",function(event) {
  //
  //  makeSound(event.key);


 // });
//  function makeSound (key){
//    switch (key) {
//      case "w":
//        var tom1 = new Audio("sounds/tom-1.mp3");
//        tom1.play();
//        break;
//
//      case "a":
//        var tom2 = new Audio("sounds/tom-2.mp3");
//        tom2.play();
//        break;
//
//      case "s":
//        var audio = new Audio("sounds/tom-3.mp3");
//        audio.play();
//        break;
//
//      case "d":
//        var audio = new Audio("sounds/tom-4.mp3");
//        audio.play();
//        break;
//
//      case "j":
//        var audio = new Audio("sounds/snare.mp3");
//        audio.play();
//        break;
//
//      case "k":
//        var audio = new Audio("sounds/crash.mp3");
//        audio.play();
//        break;
//
//      case "l":
//        var audio = new Audio("sounds/kick-bass.mp3");
//        audio.play();
//        break;
//
//
//      default:console.log();
//
//    }
//
//
//
//
//
// }


    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

}

//
for (i=0; i<numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("keypress", makeSound);

  function makeSound (event){

    // this.style.color ="white";
    var buttonInnerHTML= event.key;

    // makeSound(buttonInnerHTML); - this would help if we deleted the whole switch statement.

    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;


      default:console.log();



    }

   buttonAnimation(event.key);
 }


}


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
