import { createPixiApp, getCanvasEl } from "./framework/game";


const initGame = async () => {
    const canvasEl = getCanvasEl("game");
    const pixiApp = createPixiApp({
        view: canvasEl,
        width: window.innerWidth,
        height: window.innerHeight
      });
}
initGame();
