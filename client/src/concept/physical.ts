import { _CONCEPT } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/0_1_concept.type.js";
import {  Concept } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/1_0_concept.js";



export enum PhysicalShape {
    Triangle,
    Square,

    Box,
    TriangularPrism,
    HexagonalPrism,

    Sphere,
    Cone,
}

export interface PhysicalQualities {
    Physical: {
        solid:      boolean;
        shape:      PhysicalShape;

        mass:       number;
        friction:   number;
        elasticity: number;
    }
}


/**
 * 
 * 
 *  Physical Concept
 * 
 * 
 */

export class Physical extends Concept<_CONCEPT[], PhysicalQualities> {
    
    name = "Physical";

    principles = {};
    qualities  = {} as PhysicalQualities;
    
    public foundation: _CONCEPT[] = []

    public transform(previous: Concept): Concept<_CONCEPT[]> {
    
        if (previous.name === "Visual") {
            
        }


        return this;

    }
}