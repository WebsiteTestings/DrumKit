var drums = document.querySelector(".set").querySelectorAll(".drum").length;

for (let i = 0; i < drums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonPressed = this.textContent;
    makeSound(buttonPressed);
    animation(buttonPressed);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  animation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("/sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("/sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("/sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("/sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("/sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("/sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("/sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      break;
  }
}
function animation(keypressed) {
  var activeKey = document.querySelector("." + keypressed);
  activeKey.classList.add("pressed");
  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 0100);
}
//Constructor Function
function BellBoy(name, age, hasWorked, languages) {
  this.name = name;
  this.age = age;
  this.hasWorked = hasWorked;
  this.languages = languages;
}

//initialise Object
var bellboy1 = new BellBoy("Prasad", 17, true, ["Marathi", "Hindi"]);
console.log(bellboy1);
