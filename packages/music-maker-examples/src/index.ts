import { MakeMelodyCommand, ScaleType, ScaleService, MusicConstants } from '@ng-music-maker/core';
import { MidiServices } from "@ng-music-maker/infra";
const { exec } = require("child_process");
var fs = require('fs');
var Midi = require('jsmidgen');

const command = new MakeMelodyCommand();
command.scaleRoot = 60;
command.scaleType = ScaleType.Major;
command.phraseLengthInBeats = 16;

const midiService = new MidiServices();
const scaleService = new ScaleService(midiService);
const scaleNotes = scaleService.MakeScale(command.scaleRoot-24, command.scaleType, 8);

// let's generate a sin wave
const numberOfTicks = (command.phraseLengthInBeats) * 4;
let x = 0;
let k = (Math.PI * 2) / numberOfTicks;
let notesToPlay = [];

for(let i=0; i<numberOfTicks; i++){
    let waveValue = Math.sin(x);
    x = x + k;

    // map math function onto a scale; just play sixteenth notes
    let scaleNumber = Math.floor(waveValue * 7*2 ) + 23;
    if(scaleNotes[scaleNumber])
        notesToPlay.push(scaleNotes[scaleNumber]);
}

console.log(notesToPlay);

// play it

var file = new Midi.File();

// Build a track
var track = new Midi.Track();
track.setTempo(180);

file.addTrack(track);

// Make a scale
for (var i = 0; i < notesToPlay.length; i++) {
    track.addNote(0, notesToPlay[i], MusicConstants.BEAT/4);
}

// Write a MIDI file
fs.writeFileSync('test.mid', file.toBytes(), 'binary');
exec('timidity test.mid');
