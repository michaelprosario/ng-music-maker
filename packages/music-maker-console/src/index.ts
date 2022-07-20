var fs = require('fs');
var Midi = require('jsmidgen');
import { MidiServices } from "@ng-music-maker/infra";
import { ScaleService, ScaleType  } from "@ng-music-maker/core";
var beat=25;
var file = new Midi.File();

// Build a track
var track = new Midi.Track();
track.setTempo(80);
file.addTrack(track);

// Play a scale
var midiService = new MidiServices();
var scaleService = new ScaleService(midiService);
var scale = scaleService.MakeScale("c4", ScaleType.MajorPentatonic,2)

for(var i=0; i<scale.length; i++){
    track.addNote(0,scale[i],beat*2);
}

// Write a MIDI file
fs.writeFileSync('test.mid', file.toBytes(), 'binary');
