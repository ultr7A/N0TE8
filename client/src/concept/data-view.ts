/***
 * 
 *  DataView Concept
 * 
 */

import { _CONCEPT } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/0_1_concept.type";
import { Concept } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/1_0_concept";

export class DataViewConcept extends Concept<_CONCEPT[]> {

    name: "DataView";

    foundation: _CONCEPT[] = [];
    principles: { [principleName: string]: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => any; };
    qualities:  { [name: string]: any; };

    transform(input?: Concept<_CONCEPT[]>): Concept<_CONCEPT[]> {
        //throw new Error("Method not implemented.");
        return this;
    }

}