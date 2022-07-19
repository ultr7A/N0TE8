import { Association } from "./000_association.interface.js";

export class Link implements Association<string, string> {

    constructor(
        public from: string,
        public to:   string
    ){                      }

}