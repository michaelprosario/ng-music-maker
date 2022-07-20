import { IMidiServices } from "@ng-music-maker/core";
var Util = require('jsmidgen').Util;

export class MidiServices implements IMidiServices
{
    GetNoteNumber(aNote: any): number {
        if (typeof (aNote) == 'number') {
            return aNote
        } else {
            var note = Util.midiPitchFromNote(aNote);
            note = parseInt(note);
            return note;
        }
    }

}
