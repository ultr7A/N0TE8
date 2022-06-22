/**
 * 
 */
export interface UIComponent {

    onEvent(eventName: string, payload: any): void
};


export interface UIDataComponent<V = any> extends UIComponent {
    Value: V
};

export interface UIControlComponent<E = any> extends UIComponent{
    onInput(event: E): void;
};