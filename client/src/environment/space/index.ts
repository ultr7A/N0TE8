import { HemisphericLight, Scene, Vector3 , Color4, Engine, WebXRInputSource } from "@babylonjs/core";

import { makeGround } from "./world/ground";
import { NetConsole } from "../../util/netconsole";
import { makeBox } from "../object/box";
import { makeCamera } from "../../user/camera";

export const createScene   = function(engine: Engine, canvas: HTMLCanvasElement) {
            
    const   scene            =  new Scene(engine);
            scene.clearColor =  new Color4(0,0,0, 1);
    const   light            =  new HemisphericLight("light", new Vector3(1, 0.5, 0), scene);

    const   ground           = makeGround();


       // hide/show the Inspector
    window.addEventListener("keydown", (ev) => {
        // Shift+Ctrl+Alt+I
        if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
            if (scene.debugLayer.isVisible()) {
                scene.debugLayer.hide();
            } else {
                scene.debugLayer.show();
            }
        }
    });



    makeBox(scene, 0, 0);
    makeCamera(canvas, scene);

    const xrPromise = scene.createDefaultXRExperienceAsync({
        floorMeshes: [ground]
    });


    return xrPromise.then((xrExperience) => {
        console.log("Done, WebXR is enabled.");
        
        // todo: await xrExperience.input to exist...
        
        // xrExperience.input.onControllerAddedObservable.add((eventData: WebXRInputSource) => {
        //     NetConsole.log(eventData, () => {}, null);
        // })
        //init_user_input(xrExperience)
        return scene;
    });
}
