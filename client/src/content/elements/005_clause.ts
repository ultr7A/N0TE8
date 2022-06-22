import { ContentElement } from "./000_element.interface.js";
import { Word } from "./002_word.js";
import { Phrase } from "./004_phrase.js";

export type LanguageExpressionNode = Phrase | Clause | Word

export class Clause implements ContentElement<LanguageExpressionNode>{

    public values: LanguageExpressionNode[];
    
    public version = 0;
    public id:        string; 
    public author_id: string;
    public name: string;
}