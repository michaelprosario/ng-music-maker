import { ChordChange } from "../value-objects/chord-change";
import { ChordType } from "../enums";
import { IMidiServices } from "../interfaces/midi-service";
import { Chord } from "../value-objects/chord";
import { ChordChange2 } from "../value-objects/chord-change2";
import { Util } from "./util";
import { IChordWithMeasures } from "../interfaces/chord-with-measures";

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

    getScaleNotesMap(){
        let map = {} as any;
        map[1] = "c4";
        map[2] = "d4";
        map[3] = "f4";
        map[4] = "g4";
        map[5] = "a4";
        map[6] = "b4";
        return map;
    }

    MakeChordChangesFromChordChange2(phrase: Array<ChordChange2>)
    {
        let scaleMap = this.getScaleNotesMap();

        let response: Array<ChordChange> = [];
        for(let chordChange2 of phrase){
            let root = scaleMap[chordChange2.chordRoot];
            let chord = this.MakeChord(root, chordChange2.chordType);
            let chordChange = new ChordChange(chord, chordChange2.beatCount);
            response.push(chordChange);
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

    MakeChordList(chordChanges: IChordWithMeasures[])
    {
        // loop through chord changes ...
        var chordList = new Array();
        for(let chordChange of chordChanges)
        {
            chordList.push(new ChordChange(this.MakeChord(
                chordChange.rootNote,
                chordChange.chordType),chordChange.measures));
        }

        return chordList;
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
