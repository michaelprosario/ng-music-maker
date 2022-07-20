export interface ITrack{
    addChord(channel: number, Chord: any, arg2: number, velocity?: number) : void;
    addNote(channel: number, arg1: any, arg2: number, velocity?: number): void;
}
