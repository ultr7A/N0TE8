import { Visual } from "meta.gl/dist/elements/visual.js";
import { _CONCEPT } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/0_1_concept.type";
import { Concept } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/1_0_concept.js"
import { Physical } from "../../../../concept/physical"


export interface SkyQualities {
    Sky: {
        color: string;
    }
}


/**
 * 
 * Sky Object
 * 
 */

export class SkyObject extends Concept<_CONCEPT[], SkyQualities>{
    
    name: string = "Sky";

    constructor() {
        super();
        super.project()
    }

    foundation = [ 
        new Visual() as unknown as Concept,
        new Physical()
    ];

    principles = {
        "change_lighting__with__time_of_day": (c: Concept) => { 
            // TODO: fully implement
            return {
                Sky: {
                    color: "0xffffff" // computeSkyColor()
                }
            }
        }
    };

    qualities: SkyQualities = {
        Sky: this.generateSky(Date.now())
    };


    private generateSky(timeOfDay: number) {
        return {
            color: "0xffffff"
        }
    }
}