var btnArr = document.querySelectorAll(".drum");

for (var i = 0; i < btnArr.length; i++) {
  //console.log(i);
  btnArr[i].addEventListener("click",
    function() {
      playAudio(this.innerText);
      console.log(this.innerText);


    }

  );

}

for (var i = 0; i < btnArr.length; i++) {
  //console.log(i);
  btnArr[i].addEventListener("keydown",
    // event is important!!!
    function(event) {
      var str = event.code.substring(3,4).toLowerCase();

      playAudio(str);
      console.log(str);


    }

  );

}

function playAudio(str) {

  switch (str) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
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
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

      default: console.log("Something is wrong.");


  }



}
