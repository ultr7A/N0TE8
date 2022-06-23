import { EditorContextTraversal } from "./0_2_context-traversal.js";

/**
 * 
 */
export interface EditorContext<ContextCoords = {x: number, y: number}, ReadData = any, WriteData = any> {
    read():                 ReadData;
    write(data: WriteData): void;
    traverse(traversal: EditorContextTraversal<ContextCoords>)
    select(from:        EditorContextTraversal<ContextCoords>, to: EditorContextTraversal<ContextCoords>);
    cut(): void;
    copy(): void;
    paste(): void;
}