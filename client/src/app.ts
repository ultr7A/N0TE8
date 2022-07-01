import { Engine } from "@babylonjs/core";
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { createScene } from "./editor_ 🚁🖌/universe_ ✨🦄/space";


const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
const engine = new Engine(canvas, true);
    



    
createScene(engine, canvas).then(sceneToRender => {
    engine.runRenderLoop(() => sceneToRender.render());
});

