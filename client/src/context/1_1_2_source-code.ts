import { EditorContext } from "./0_1_context.interface.js";
import { EditorContextTraversal } from "./0_2_context-traversal.js";


export interface SourceCodeContextCoords {

}

export class SourceCodeContext implements EditorContext<SourceCodeContextCoords, string, string> {
    public read(): any {

    }

    public write(data: any) {

    }


    public traverse(through: EditorContextTraversal<SourceCodeContextCoords>) {

    }

    public select(from: EditorContextTraversal<SourceCodeContextCoords>, to: EditorContextTraversal<SourceCodeContextCoords>) {

    }


    public copy(): void {

    }

    public cut(): void {

    }

    public paste(): void {

    }
}