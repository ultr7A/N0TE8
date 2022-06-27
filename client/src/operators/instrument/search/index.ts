import { Instrument } from "..";
import { InstrumentParameters } from "../instrument-parameters.interface.js";
import { InstrumentResult } from "../instrument-result.interface.js";


export interface SearchInstrumentInputParams extends InstrumentParameters {

}

export interface SearchInstrumentResult<V = any> extends InstrumentResult<V> {

}

export interface SearchInstrument <
                    InputParams     extends SearchInstrumentInputParams, 
                    UsageReturnType extends InstrumentResult<any>
                                    >
        extends  Instrument<InputParams, UsageReturnType> {

}