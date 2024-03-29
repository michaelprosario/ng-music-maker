import { MusicMaker } from '@ng-music-maker/infra';
import { ScaleType } from '@ng-music-maker/core';
import { playMidi } from './play-midi';

var fs = require('fs');
var Midi = require('jsmidgen');

let mm = new MusicMaker();

var file = new Midi.File();

// Build a track
var track = new Midi.Track();
track.setTempo(180);
file.addTrack(track);

// Make a scale
var scale = mm.scale.MakeScale("c4", ScaleType.Spanish, 4);
for (var i = 0; i < scale.length; i++) {
    track.addNote(0, scale[i], 50);
}

// Write a MIDI file
fs.writeFileSync('test.mid', file.toBytes(), 'binary');
playMidi('test.mid');
