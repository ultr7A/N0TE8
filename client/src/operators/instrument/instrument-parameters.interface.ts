import { DataType } from "wrapt.co_re/dist/Domain [โ๐โ๐งญโ]/primitive/type.enum.js";
import { Matrix4 }   from "wrapt.co_re/dist/Model [โโฌกโ๊ฎโโฆโ]/maths/matrix/matrix-4.js"

export interface InstrumentParameters {
 
    parameters: [any, DataType][],
    userParameters: {
     
        keysPressed:    {[keyCombination: string]: any},
        buttonsPressed: {[buttonCombination: string]: any},
     
        analogueControls: [number, number][],
        
        pointingDevices:   any,
     
        matrices: {
          camera: Matrix4,
          left_hand:  Matrix4,
          right_hand: Matrix4
        }

    }   
}