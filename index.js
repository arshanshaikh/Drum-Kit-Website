//Detecting-----------> button press



var numberOfDrums = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this.style.color="white";

    var ButtonInnerHTML = this.innerHTML;

    makeSound(ButtonInnerHTML);

    buttonAnimation(ButtonInnerHTML);
  });
}



//Detecting-------> keyboard press

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      console.log(key);
      break;

    case "a":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;

    case "s":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;

    case "j":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;

    case "k":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;

    case "l":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;

    default:
      console.log(ButtonInnerHTML);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey); //.w    .k    
  activeButton.classList.add("pressed");//to add the pressed functionality


  //it will remove the pressed
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}