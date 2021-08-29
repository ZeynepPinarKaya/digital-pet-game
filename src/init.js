import gameState, { handleUserAction } from "./gamesState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

async function init() {
  console.log("starting game");
  initButtons(handleUserAction);

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
