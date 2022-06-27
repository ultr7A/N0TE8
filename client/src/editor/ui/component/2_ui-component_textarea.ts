import { UIControlComponent, UIDataComponent } from "./0_ui-component.js";

export class UITextarea<Data = string> implements UIDataComponent, UIControlComponent {

    Value = "";

    onInput(payload: Data) {

    }

    onEvent(eventName: string, payload: any) { }
}