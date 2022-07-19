/***
 * 
 *  DataView Concept
 * 
 */

import { _CONCEPT } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/0_1_concept.type";
import { Concept } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/1_0_concept";

export type DataViewChain = Concept<_CONCEPT[]>[];
export interface DataViewQualities {

}

export class DataViewConcept extends Concept<DataViewChain> {

    name: "DataView";

    foundation: DataViewChain = [];
    principles: { [principleName: string]: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => any; };
    qualities:  { [name: string]: any; };

    transform(input?: Concept<_CONCEPT[]>): Concept<_CONCEPT[]> {
        //throw new Error("Method not implemented.");
        return this;
    }

}