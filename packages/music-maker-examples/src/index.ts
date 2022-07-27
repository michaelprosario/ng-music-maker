import { MidiServices } from '@ng-music-maker/infra';
import { ScaleService, ScaleType, DrumNotes } from '@ng-music-maker/core';

var fs = require('fs');
var Midi = require('jsmidgen');

let midiServices = new MidiServices();
let scaleServices = new ScaleService(midiServices);

function makeScale() {
    var file = new Midi.File();

    // Build a track
    var track = new Midi.Track();
    track.setTempo(80);
    file.addTrack(track);

    // Make a scale
    var scale = scaleServices.MakeScale("c4", ScaleType.MajorPentatonic, 2);
    for (var i = 0; i < scale.length; i++) {
        track.addNote(0, scale[i], 50);
    }

    // Write a MIDI file
    fs.writeFileSync('test.mid', file.toBytes(), 'binary');
}

function threeNotes() {
    var file = new Midi.File();

    // Build a track
    var track = new Midi.Track();
    track.setTempo(80);
    file.addTrack(track);

    let mm = midiServices;
    let beat = 50;
    track.addNote(0, mm.GetNoteNumber("c4"), beat);
    track.addNote(0, mm.GetNoteNumber("d4"), beat);
    track.addNote(0, mm.GetNoteNumber("e4"), beat);

    // Write a MIDI file
    fs.writeFileSync('test2.mid', file.toBytes(), 'binary');
}

function drumTest()
{
    var file = new Midi.File();

    // Build a track
    var track = new Midi.Track();
    track.setTempo(80);
    file.addTrack(track);

    let mm = midiServices;

    var addRhythmPattern = mm.AddRhythmPattern;
    addRhythmPattern(track, "x-x-|x-x-|xxx-|x-xx",DrumNotes.ClosedHighHat);
    fs.writeFileSync('drumTest.mid', file.toBytes(), 'binary');
}


makeScale();
threeNotes();
drumTest();
