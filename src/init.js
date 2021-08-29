import gameState from "./gamesState";

const TICK_RATE = 5000;

async function init() {
  console.log("starting game");

  let nextTimeToTİck = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTİck <= now) {
      gameState.tick();
      nextTimeToTİck = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
