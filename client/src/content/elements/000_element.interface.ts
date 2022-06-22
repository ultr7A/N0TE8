import { Sentence } from "./006_sentence.js";

export interface ContentElement<V = any> {
    version:          number;
    id:               string;
    author_id:        string;
    contributor_ids?: string[]
    name?:            string;
    value?:           V;
    values?:          V[];
    principles?:      Sentence[];
}
