import { Instrument } from "..";
import { InstrumentParameters } from "../instrument-parameters.interface.js";
import { InstrumentResult } from "../instrument-result.interface.js";

export interface ExternalInstrument <
                    InputParams     extends InstrumentParameters, 
                    UsageReturnType extends InstrumentResult<any>
                                    >
        extends  Instrument<InputParams, UsageReturnType> {

}