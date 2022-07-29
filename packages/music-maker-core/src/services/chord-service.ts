import { ChordType } from "../enums";
import { IMidiServices } from "../interfaces/midi-service";

export class ChordServices
{
    constructor(private midiServices: IMidiServices){
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
}
