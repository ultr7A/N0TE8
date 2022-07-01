import { Association, Group } from "./000_association.interface";

export class Zone implements Group<[number, number, number][]> {

    constructor(
        public from: [number,number,number][]
    ){                      }

}