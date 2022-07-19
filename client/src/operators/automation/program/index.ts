import { Automation } from "..";

/**
 * 
 * 
 * Program Automation
 * 
 * 
 */
export class ProgramAutomation implements Automation {

    tasks:   ProgramAutomation[];
    operate: (params: Record<string, any>) => void;

}