import { Group } from "./000_association.interface.js";

/**
 * 
 * Topic
 * 
 */
export class Topic implements Group<string> {

    constructor(
        public from: string
    ){                      }

}