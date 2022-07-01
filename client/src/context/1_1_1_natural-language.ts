import { EditorContext } from "./0_1_context.interface.js";
import { EditorContextTraversal } from "./0_2_context-traversal.js";
import { XYContextCoords } from "./0_3_context-coords.interface.js";

interface NLContextCoords extends XYContextCoords { 

} 

export class NaturalLanguageContext implements EditorContext<NLContextCoords> {
    public read(): any {

    }

    public write(data: any) {

    }


    public traverse(through: EditorContextTraversal<NLContextCoords>) {

    }

    public select(from: EditorContextTraversal<NLContextCoords>, to: EditorContextTraversal<NLContextCoords>) {

    }


    public copy(): void {

    }

    public cut(): void {

    }

    public paste(): void {

    }
}