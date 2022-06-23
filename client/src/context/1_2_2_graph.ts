import { EditorContext } from "./0_1_context.interface.js";
import { EditorContextTraversal } from "./0_2_context-traversal.js";
import { XYContextCoords } from "./0_3_context-coords.interface.js";


export interface IGraphContextCoords {
    back():                  void;
    connections():          any[];
    foward(connection: any): void;
} 


export class GraphContextCoords implements IGraphContextCoords {
    
    startingNode_id: string;

    back():                  void {

    }
    connections():          any[] {
        return [];
    };
    foward(connection: any): void {

    };
}

export class GraphContext implements EditorContext<GraphContextCoords, string, string> {
    public read(): any {

    }

    public write(data: any) {

    }


    public traverse(through: EditorContextTraversal<GraphContextCoords>) {

    }

    public select(from: EditorContextTraversal<GraphContextCoords>, to: EditorContextTraversal<GraphContextCoords>) {

    }


    public copy(): void {

    }

    public cut(): void {

    }

    public paste(): void {

    }
}