import { Vector3, ArcRotateCamera, Scene } from "@babylonjs/core";


export class Camera {

    public static make(scene: Scene, canvas: HTMLCanvasElement) {

        const alpha     = Math.PI/4;
        const beta      = Math.PI/3;
        const radius    = 8;
        const target    = new Vector3(0, 0, 0);
        const camera    = new ArcRotateCamera("Camera", alpha, beta, radius, target, scene);
                
        camera.attachControl(canvas, true);
    }
}
