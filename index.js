
function handleKeyPress (event) {
  let btn = document.querySelector(`[data-key="${event.keyCode}"]`)
  if (btn) {
    btn.classList.add("playing")
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    audio.currentTime = 0
    audio.play()
  }
}

function handleTransitionEnd (event) {
  this.classList.remove("playing")
}

const $keys = document.querySelectorAll(".key")

$keys.forEach(key => {
  key.addEventListener("transitionend", handleTransitionEnd)
})

document.addEventListener("keydown", handleKeyPress)