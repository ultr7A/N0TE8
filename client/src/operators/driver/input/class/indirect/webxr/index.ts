/**
 * 
 * 
 *  WebXR Indirect-Input Driver 
 * 
 * 
 */

import { IndirectInputDriver } from "..";
import { EditorContext } from "../../../../../../context/0_1_context.interface";

export class WebXRInputDriver implements IndirectInputDriver {
    
    connect() {
        throw new Error("Method not implemented.");
    }
    handle(e: any) {
        throw new Error("Method not implemented.");
    }
    parseThrough(context: EditorContext, rawInput: any) {
        throw new Error("Method not implemented.");
    }

}