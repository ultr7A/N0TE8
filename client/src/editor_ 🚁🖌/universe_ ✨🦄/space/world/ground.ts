import { MeshBuilder } from "@babylonjs/core";

/**
 * 
 * Ground Object 
 * 
 */
export class GroundObject {
    

    public static makeGround()      {
    
        return MeshBuilder.CreateGround("ground", {width: 16, height: 16});
    }

    
}