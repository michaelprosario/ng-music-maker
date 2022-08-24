import { MidiServices, MusicMaker } from '@ng-music-maker/infra';
import { DrumNotes } from '@ng-music-maker/core';
const { exec } = require("child_process");

var fs = require('fs');
var Midi = require('jsmidgen');

let midiServices = new MusicMaker().midi;

var file = new Midi.File();

// Build a track
var track = new Midi.Track();
track.setTempo(80);
file.addTrack(track);

let mm = midiServices;
var addRhythmPattern = mm.AddRhythmPattern;
addRhythmPattern(track, "x-x-|x-x-|xxx-|x-xx",DrumNotes.ClosedHighHat);
fs.writeFileSync('drumTest.mid', file.toBytes(), 'binary');
exec('timidity drumTest.mid');
