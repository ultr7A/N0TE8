import { Instrument } from "../../instrument/index.js";
import { InstrumentResult } from "../instrument-result.interface";
import { SearchInstrumentInputParams } from "../search";

/**
 * 
 * 
 * VisualizationInstrument
 * 
 * 
 */
export interface    VisualizationInstrument<
                        InputParams     extends SearchInstrumentInputParams, 
                        UsageReturnType extends InstrumentResult<any>
                                           >
extends  Instrument<InputParams, UsageReturnType> {

}
