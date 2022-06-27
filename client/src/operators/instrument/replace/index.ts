import { Instrument } from "..";
import { InstrumentParameters } from "../instrument-parameters.interface.js";
import { InstrumentResult } from "../instrument-result.interface.js";


export interface ReplaceInstrumentInputParams extends InstrumentParameters {

}

export interface ReplaceInstrumentResult<V = any> extends InstrumentResult<V> {

}

export interface ReplaceInstrument <
                    InputParams     extends ReplaceInstrumentInputParams, 
                    UsageReturnType extends InstrumentResult<any>
                                    >
        extends  Instrument<InputParams, UsageReturnType> {

}