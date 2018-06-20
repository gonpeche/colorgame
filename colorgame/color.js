var numSquares = 6
var color = []
var pickedColor
var square = document.querySelectorAll(".square")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

generateRandomColors(numSquares)
pickColor()
resetColorSquares()



function pickColor() {
  var randomNumber = Math.floor((Math.random() * color.length) + 0);
  return pickedColor = color[randomNumber]
}

document.querySelector("#colorDisplay").innerText = pickedColor
console.log(square)
function resetColorSquares () {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color[i]
    square[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor
      if (clickedColor !== pickedColor) {
        // this.style.backgroundColor = color[3];
        this.style.backgroundColor =  document.querySelector("body").style.backgroundColor
        document.querySelector("#stripe").innerText = "Try Again!"
      } else {
        document.querySelector(".output").innerText = "Correct!"
        document.querySelector("h1").style.backgroundColor = pickedColor
        changeColors(pickedColor)
        document.querySelector("#reset").innerText = "Play again?"
      }
    })
  }
}

function changeColors (color) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color
  }
}

function randomColor () {
  var a = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  var c = Math.floor(Math.random() * 256)
  return "rgb(" + a + ", " + b + ", " + c + ")"
}

function generateRandomColors (longitud) {
  color = []
  for (var i = 0; i < longitud; i++) {
    color.push(randomColor())
  }
}

function reset () {
  generateRandomColors(numSquares)
  pickColor()
  document.querySelector("#colorDisplay").innerText = pickedColor
  resetColorSquares()
  document.querySelector("#reset").innerText = "New Colors"
  document.querySelector("#stripe").innerText = ""
  document.querySelector("h1").style.backgroundColor = "steelblue"
}

document.querySelector("#reset").addEventListener("click", function () {
  reset ()
})

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected")
  hardBtn.classList.remove("selected")
  square[3].style.visibility = "hidden"
  square[4].style.visibility = "hidden"
  square[5].style.visibility = "hidden"
  numSquares = 3
  reset()
})
hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected")
  easyBtn.classList.remove("selected")
  square[3].style.visibility = "visible"
  square[4].style.visibility = "visible"
  square[5].style.visibility = "visible"
  numSquares = 6
  reset()
})
