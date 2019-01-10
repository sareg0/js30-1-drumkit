document.addEventListener("keydown", handleKeyPress)
document.addEventListener("keyup", handleKeyUp)


function handleKeyPress (event) {
  let btn = document.querySelector(`[data-key="${event.keyCode}"]`)
  if (btn) {
    btn.classList.add("playing")
  } 
  // var audio = new Audio('sounds/boom.wav')
  // audio.play()
}

function handleKeyUp (event) {
  console.log(event)
  let btn = document.querySelector(`[data-key="${event.keyCode}"]`)
  if (btn) {
    btn.classList.remove("playing")
  } 
}