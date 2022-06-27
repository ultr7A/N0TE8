import { InstrumentCapability } from "./instrument-capability.enum.js";
import { InstrumentParameters } from "./instrument-parameters.interface.js";
import { InstrumentResult } from "./instrument-result.interface.js";

export interface Instrument
                <
                    InputParams     extends InstrumentParameters, 
                    UsageReturnType extends InstrumentResult<any>
                >
{

    use(params: InputParams): UsageReturnType;

    capabilities: InstrumentCapability[];
    
}