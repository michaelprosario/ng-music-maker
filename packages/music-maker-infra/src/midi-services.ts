import { IMidiServices, MusicConstants } from "@ng-music-maker/core";
import { MakeDrumTrackCommand } from "music-maker-core/src/requests/make-drum-track-command";
import { MakeDrumTrackResponse } from "music-maker-core/src/response/make-drum-track-response";
import { ITrack } from "./track";
var Util = require('jsmidgen').Util;
var fs = require('fs');
var Midi = require('jsmidgen');
var Util = require('jsmidgen').Util;

export class MidiServices implements IMidiServices
{
    makeDrumTrack(command: MakeDrumTrackCommand): MakeDrumTrackResponse {

        var beat=command.beatsPerMinute;
        var file = new Midi.File();

        // Build a track
        var track = new Midi.Track();
        track.setTempo(beat);
        file.addTrack(track);

        for(let drumTrack of command.tracks){
            this.AddRhythmPattern(track, drumTrack.pattern,drumTrack.instrumentNumber);
        }

        let fileName = Date.now().toString(36) + ".mid";

        fs.writeFileSync(fileName, file.toBytes(), 'binary');
        let response = new MakeDrumTrackResponse();
        response.file = fileName;
        return response;
    }

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
