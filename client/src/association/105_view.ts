import { Group } from "./000_association.interface.js";

export class View implements Group<unknown> {

    constructor(
        public from: unknown
    ){                      }

}