import { Instrument } from "..";
import { InstrumentParameters } from "../instrument-parameters.interface.js";
import { InstrumentResult } from "../instrument-result.interface.js";


export interface TransformInstrumentInputParams extends InstrumentParameters {

}

export interface TransformInstrumentResult<V = any> extends InstrumentResult<V> {

}

/**
 * 
 * 
 *  TransformInstrument
 * 
 * 
 */
export interface TransformInstrument <
                    InputParams     extends TransformInstrumentInputParams, 
                    UsageReturnType extends TransformInstrumentResult<any>
                                    >
        extends  Instrument<InputParams, UsageReturnType> {

}