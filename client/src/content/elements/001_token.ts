import { ContentElement } from "./000_element.interface.js";

export class Token implements ContentElement<string> {

    public value: string;

    public version = 0;
    public id:        string; 
    public author_id: string;
    public name: string;
}