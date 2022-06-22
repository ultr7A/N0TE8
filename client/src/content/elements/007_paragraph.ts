import { ContentElement } from "./000_element.interface.js";

export class Paragraph implements ContentElement {
    
    public version = 0;
    public id:        string; 
    public author_id: string;
    public name: string;

}