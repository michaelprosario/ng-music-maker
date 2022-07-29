export class ChordChange {
    public Chord: Array<number>;
    public Length: number;

    constructor(chord: Array<number>, length: number) {
        this.Chord = chord;
        this.Length = length;
    }
}
