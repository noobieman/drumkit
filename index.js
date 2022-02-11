var plus = document.querySelectorAll("button").length;
for ( var i = 0; i<= plus; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);

    });
  



document.addEventListener("keypress", function(event){
makeSound(event.key);
});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3')
  tom1.play();
      break;

      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3')
        tom2.play();

        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3')
          tom3.play();

          case "d":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            case "j":
              var snare = new Audio('sounds/snare.mp3')
              snare.play();

              case "k":
                var kickbass = new Audio('sounds/kick-bass.mp3')
                kickbass.play();
                case "l":
                  var crash = new Audio('sounds/crash.mp3')
                  crash.play();
  
    default:
      break;
  }
}
}



