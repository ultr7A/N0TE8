import { _CONCEPT } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/0_1_concept.type";
import { Concept } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/1_0_concept";

export type HIDHandlerChain = Concept<_CONCEPT[]>[];

export interface HIDHandlerQualities {

}

/**
 * 
 *  HIDHandler Concept
 * 
 */
export class HIDHandler extends Concept<HIDHandlerChain> {
  
    name: string;
    foundation: HIDHandlerChain;
    principles: { [principleName: string]: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => any; }
      = {

        }
    qualities: HIDHandlerQualities;
    
    transform(input?: Concept<_CONCEPT[]>): Concept<HIDHandlerChain> {
        throw new Error("Method not implemented.");
    }

}