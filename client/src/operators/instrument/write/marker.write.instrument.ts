import { WritingInstrument, WritingInstrumentParams, WritingInstrumentResult } from ".";
import { InstrumentCapability } from "../instrument-capability.enum";

/**
 * 
 * 
 *  Marker Writing-Instrument
 * 
 * 
**/
export  class       Marker<T = any> 
        implements  WritingInstrument
                    <
                        WritingInstrumentParams,
                        WritingInstrumentResult
                    > 
{
    
    use(params: WritingInstrumentParams): WritingInstrumentResult<T> {
        throw new Error("Method not implemented.");
    }

    capabilities: InstrumentCapability[];

}