
import { StandardMaterial, BoxBuilder, Color3, ActionManager, ExecuteCodeAction } from "@babylonjs/core";
import { NetConsole } from "../../../../util/netconsole";


const setBoxActions = function(_scene, _box) {
            
    _box.actionManager = new ActionManager(_scene);
    _box.actionManager.registerAction(

                        new ExecuteCodeAction(
                            ActionManager.OnPickTrigger, 
                            function (evt) {
                                
                                const sourceBox = evt.meshUnderPointer;

                                // sourceBox.position.x += 0.1;
                                // sourceBox.position.y += 0.1;
                                
                                // send console.log over http:
                                NetConsole.log(evt, null,_scene);
                                makeBox(_scene, evt.pointerX/10.0, evt.pointerY/10.0);

                                _box.material.diffuseColor = Color3.Random();
                                    
                            })
                                    
            );
}



export const makeBox       = function(_scene, x, z) {
            
    const   box         =    BoxBuilder.CreateBox("box", { size: 1 });
                   
            box.position.x = x || 0.5;
            box.position.y = z || 1;

    const   boxMaterial = new StandardMaterial("material", _scene);
            boxMaterial.diffuseColor = Color3.Random();
                    
            box.material = boxMaterial;
    
    setBoxActions(_scene, box);
}