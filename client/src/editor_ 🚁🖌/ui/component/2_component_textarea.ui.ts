import { UIControlComponent, UIDataComponent } from "./0_component.ui.js";

export class UITextarea<Data = string> implements UIDataComponent, UIControlComponent {

    Value = "";

    onInput(payload: Data) {

    }

    onEvent(eventName: string, payload: any) { }
}