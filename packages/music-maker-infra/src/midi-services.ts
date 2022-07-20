import { IMidiServices, MusicConstants } from "@ng-music-maker/core";
import { ITrack } from "./track";
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

    AddRhythmPattern(track: ITrack, strPattern: string, note: number) {
        var i = 0;
        for (i = 0; i < strPattern.length; i++) {

            var currentChar = strPattern[i];
            if (currentChar == "x") {
                track.addNote(9, note, MusicConstants.BEAT / 4)
            }
            else if (currentChar != "|") {
                track.addNote(9, 0, MusicConstants.BEAT / 4, 0);
            }
        }
    }



}
