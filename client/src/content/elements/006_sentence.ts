import { ContentElement } from "./000_element.interface.js";
import { Clause } from "./005_clause.js";

export class Sentence implements ContentElement<Clause> {

    public values: Clause[];

    public version = 0;
    public id:        string; 
    public author_id: string;
    public name: string;
}