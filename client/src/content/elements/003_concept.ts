import { ContentElement } from "./000_element.interface.js";
import { Sentence } from "./006_sentence.js";

export class Concept implements ContentElement {
    public principles: Sentence[];
    public names:      string[];
    public components: string[];

    public version:   number;
    public id:        string; 
    public author_id: string;
    public name: string;
}