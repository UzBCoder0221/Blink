document.addEventListener("DOMContentLoaded", (e) => {
  var blink = document.getElementsByClassName("blink")[0];
  handleBlink(); 
  setInterval(handleBlink, 45000); // or change as you like
});

function handleBlink() {
  const blink = document.querySelector(".blink");

  blink.classList.remove("hidden");

  blink.getAnimations().forEach(anim => {
    anim.cancel();
    anim.play();
  });

  setTimeout(() => {
    blink.classList.add("hidden");
  }, 3100);
}
