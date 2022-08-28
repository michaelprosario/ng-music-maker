import { ChordType } from "../enums";

export interface IChordWithMeasures
{
    rootNote: string;
    chordType: ChordType;
    measures: number;
}
