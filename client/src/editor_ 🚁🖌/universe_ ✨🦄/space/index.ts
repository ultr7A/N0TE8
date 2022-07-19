import { HemisphericLight, Scene, Vector3 , Color4, Engine, WebXRInputSource } from "@babylonjs/core";

import { GroundObject } from "./world/ground";
import { makeBox }     from "../object/decorative/box";
import { Camera }  from "../../../operators/driver/user/camera";
import { DebugView }   from "../../util/debug-view";
import { NetConsole } from "../../util/netconsole";

export const createScene        =   async function(
                                                engine: Engine, 
                                                canvas: HTMLCanvasElement
                                                  )
{
            
    const       scene               =  new  Scene(engine    );
                scene.clearColor    =  new  Color4(0,0,0,1  );
    const       light               =  new  HemisphericLight(
                                                        "light", 
                                                new     Vector3(1, 0.5, 0), 
                                                        scene
                                                        );

    const       ground              =  
                GroundObject           .makeGround();

                DebugView              .enable(    scene            );
                Camera                 .make(      scene,  canvas   );
                                        makeBox(   scene,  0, 0     );

    const       xrPromise           = 
                scene                  .createDefaultXRExperienceAsync({
                                            floorMeshes: [ground]
                                                                   });


    return      xrPromise              .then(
        (xrExperience)          =>      {
                        console    .log("Done, WebXR is enabled.");
                
                // todo: await xrExperience.input to exist... 
                xrExperience.input.onControllerAddedObservable.add((eventData: WebXRInputSource) => {
                        NetConsole.log(eventData, () => {}, null);
                        //init_user_input(xrExperience)
                })
                
                return  scene;
        }                               );
}
