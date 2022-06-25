import { InstrumentCapability } from "./instrument-capability.enum";
import { InstrumentParameters } from "./instrument-parameters.interface";

export interface InstrumentResult<V> {
    value:        V;
    parameters:   InstrumentParameters,
    capabilities: InstrumentCapability[];
}