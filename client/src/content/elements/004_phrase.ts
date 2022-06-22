import { ContentElement } from "./000_element.interface.js";
import { Word } from "./002_word.js";

export class Phrase implements ContentElement<Word> {

    public values: Word[]

    public version = 0;
    public id:        string; 
    public author_id: string;
    public name: string;
}