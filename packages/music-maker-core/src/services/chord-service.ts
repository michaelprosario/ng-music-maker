import { ChordType } from "../enums";
import { IMidiServices } from "../interfaces/midi-service";
import { Chord } from "../value-objects/chord";
import { Util } from "./util";

export class ChordServices
{
    constructor(private midiServices: IMidiServices){
    }

    GetChordArrayFromString(input: string)
    {
        let mapper = Util.GetNoteNameToNumberMap();
        let parts = input.split(" ");
        let response = [];
        for(let chordName of parts)
        {
            let noteNumber = mapper[chordName];
            response.push(noteNumber);
        }

        return response;
    }

    MakeChord(root: string, type: ChordType) : Array<number> {
        var intRoot = this.midiServices.GetNoteNumber(root);
        var aChord = new Array();

        if (type == ChordType.Major) {
            aChord.push(intRoot);
            aChord.push(intRoot + 4);
            aChord.push(intRoot + 7);
        }
        else if (type == ChordType.Minor) {
            aChord.push(intRoot);
            aChord.push(intRoot + 3);
            aChord.push(intRoot + 7);

        }
        else if (type == ChordType.Major7) {
            aChord.push(intRoot);
            aChord.push(intRoot + 4);
            aChord.push(intRoot + 7);
            aChord.push(intRoot + 11);
        }
        else if (type == ChordType.M7) {
            aChord.push(intRoot);
            aChord.push(intRoot + 4);
            aChord.push(intRoot + 7);
            aChord.push(intRoot + 10);
        }
        else if (type == ChordType.Minor7) {
            aChord.push(intRoot);
            aChord.push(intRoot + 3);
            aChord.push(intRoot + 7);
            aChord.push(intRoot + 10);
        }
        else {
            throw new Error("Help...Handle new chord type");
        }

        return aChord;
    }

    Estimate(notes: Array<number>)
    {
        // check for major chords
        let noteNameMapper = Util.GetNoteNumberToNameMap();
        for(let currentNote =60; currentNote<71; currentNote++)
        {
            let root = currentNote;
            let third = currentNote + 4;
            let fifth = third + 3;
            if(notes.indexOf(root) !== -1 &&
               notes.indexOf(third) !== -1 &&
               notes.indexOf(fifth) !== -1 )
            {
                return new Chord(noteNameMapper[currentNote], "major");
            }
        }

        // check for minor chords
        for(let currentNote =60; currentNote<71; currentNote++)
        {
            let root = currentNote;
            let third = currentNote + 3;
            let fifth = third + 4;
            if(notes.indexOf(root) !== -1 &&
               notes.indexOf(third) !== -1 &&
               notes.indexOf(fifth) !== -1 )
            {
                return new Chord(noteNameMapper[currentNote], "minor");
            }
        }

        return null;
    }
}
