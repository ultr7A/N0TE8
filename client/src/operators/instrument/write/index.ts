import { Instrument           } from "..";
import { InstrumentParameters } from "../instrument-parameters.interface";
import { InstrumentResult } from "../instrument-result.interface";



export interface WritingInstrumentParams extends InstrumentParameters {

}

export interface WritingInstrumentResult<V = any> extends InstrumentResult<V> {

}


/**
 * 
 * 
 *  WritingInstrument
 * 
 * 
 */
export interface    WritingInstrument <
                            InputParams     extends WritingInstrumentParams, 
                            UsageReturnType extends WritingInstrumentResult<any>
                                      >
        extends Instrument<InputParams, UsageReturnType> 
{

}