import { ContextType } from "../../../context/0_0_context-type.enum";
import { EditorContext } from "../../../context/0_1_context.interface";

export interface InputDriver<Event = any> {
    connect();
    handle(e: Event);
    parseThrough(context: EditorContext, rawInput: Event);
}