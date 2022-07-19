import { ProgramAutomation } from "./program";


/**
 * 
 *  Automation
 * 
 */


export interface Automation<Params = Record<string, any>> {

    tasks:                       ProgramAutomation[];
    
    operate: (params: Params) => void;

}