import { Automation } from "..";
import { Command }  from "../command";
import { N0te8Event } from "../event";
import { ProgramAutomation } from "../program";

/**
 * 
 * 
 * Macro
 * 
 * 
 */
export class Macro implements Automation {
    constructor(
        public name:        string,
        public trigger:     N0te8Event,
        public commands:    Command[]
    ) { }

    tasks: ProgramAutomation[];
    operate: (params: Record<string, any>) => void;

}