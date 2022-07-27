import { MidiServices } from '@ng-music-maker/infra';
import { ScaleService, ScaleType } from '@ng-music-maker/core';

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

makeScale();
