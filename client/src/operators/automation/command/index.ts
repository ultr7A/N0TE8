/**
 * 
 * Command
 * 
 */
export class Command {

    constructor(
        public name: string,
        public description: string,
        public action: (...args: any[]) => void,
        public args: any[]
    ) { }
}