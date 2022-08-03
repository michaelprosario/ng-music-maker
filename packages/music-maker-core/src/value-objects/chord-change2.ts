import { ChordType } from "../enums";

export class ChordChange2 {
    chordRoot: number;
    chordType: ChordType;
    beatCount: number;
    constructor(root: number, chordType: ChordType, beats: number) {
        this.chordRoot = root;
        this.chordType = chordType;
        this.beatCount = beats;
    }
}
