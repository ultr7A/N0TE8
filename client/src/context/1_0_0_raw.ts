import { EditorContext } from "./0_1_context.interface.js";
import { EditorContextTraversal } from "./0_2_context-traversal.js";
import { XYContextCoords } from "./0_3_context-coords.interface.js";

export interface RawContextCoords extends XYContextCoords { }

/**
 * 
 */
export class RawContext implements EditorContext<RawContextCoords, string, string> {
    public read(): any {

    }

    public write(data: any) {

    }


    public traverse(through: EditorContextTraversal<RawContextCoords>) {

    }

    public select(from: EditorContextTraversal<RawContextCoords>, to: EditorContextTraversal<RawContextCoords>) {

    }


    public copy(): void {

    }

    public cut(): void {

    }

    public paste(): void {

    }
}