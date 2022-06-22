import { MeshBuilder } from "@babylonjs/core";

export const makeGround    = function()      {
    return MeshBuilder.CreateGround("ground", {width: 16, height: 16});
}