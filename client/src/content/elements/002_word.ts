import { ContentElement } from "./000_element.interface.js";

export class Word implements ContentElement{

    public value: string;
    
    public version = 0;
    public id:        string; 
    public author_id: string;
    public name: string;
}