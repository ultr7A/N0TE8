import { ContentElement } from "./000_element.interface.js";
import { Paragraph } from "./007_paragraph.js";

export class Surface implements ContentElement<Paragraph> {
    
    public values: Paragraph[]

    public version = 0;
    public id:        string; 
    public author_id: string;
    public name: string;
}