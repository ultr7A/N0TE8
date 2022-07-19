import { Automation } from "..";
import { ProgramAutomation } from "../program";

/***
 * 
 * 
 * Machine
 * 
 * 
 */
export class Machine implements Automation {
    
    tasks: ProgramAutomation[];
    operate: (params: Record<string,any>) => void;
    
}