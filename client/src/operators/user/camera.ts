import { Vector3, ArcRotateCamera } from "@babylonjs/core";

export const makeCamera    = function(_canvas, _scene) {

    const alpha     = Math.PI/4;
    const beta      = Math.PI/3;
    const radius    = 8;
    const target    = new Vector3(0, 0, 0);
    const camera    = new ArcRotateCamera("Camera", alpha, beta, radius, target, _scene);
            
    camera.attachControl(_canvas, true);
}
