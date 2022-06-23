import { EditorContext } from "./0_1_context.interface.js";
import { EditorContextTraversal } from "./0_2_context-traversal.js";
import { IGraphContextCoords } from "./1_2_2_graph.js";

export interface TreeContextCoords extends IGraphContextCoords {

}


export class TreeContext implements EditorContext<TreeContextCoords> {

    public read(): any {

    }

    public write(data: any) {

    }


    public traverse(through: EditorContextTraversal<TreeContextCoords>) {

    }

    public select(from: EditorContextTraversal<TreeContextCoords>, to: EditorContextTraversal<TreeContextCoords>) {

    }


    public copy(): void {

    }

    public cut(): void {

    }

    public paste(): void {

    }
}