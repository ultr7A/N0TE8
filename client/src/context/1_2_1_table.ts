import { EditorContext } from "./0_1_context.interface.js";
import { EditorContextTraversal } from "./0_2_context-traversal.js";
import { XYContextCoords } from "./0_3_context-coords.interface.js";


export interface TableCoords extends XYContextCoords {  }

export class TableContext implements EditorContext<TableCoords, string, string> {
    public read(): any {

    }

    public write(data: any) {

    }


    public traverse(through: EditorContextTraversal<TableCoords>) {

    }

    public select(from: EditorContextTraversal<TableCoords>, to: EditorContextTraversal<TableCoords>) {

    }


    public copy(): void {

    }

    public cut(): void {

    }

    public paste(): void {

    }
}