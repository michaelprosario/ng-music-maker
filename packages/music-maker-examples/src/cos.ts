import { MakeMelodyCommand, ScaleType, MusicConstants } from '@ng-music-maker/core';
import { MusicMaker } from "@ng-music-maker/infra";
import { playMidi } from './play-midi';

var fs = require('fs');
var Midi = require('jsmidgen');

const command = new MakeMelodyCommand();
command.scaleRoot = 60;
command.scaleType = ScaleType.Spanish;
command.phraseLengthInBeats = 16;

const mm = new MusicMaker();
const scaleService = mm.scale;
const scaleNotes = scaleService.MakeScale(command.scaleRoot-24, command.scaleType, 8);

// let's generate a sin wave
const numberOfTicks = (command.phraseLengthInBeats) * 4;
let x = 0;
let k = (Math.PI * 2) / numberOfTicks;
let notesToPlay = [];

for(let i=0; i<numberOfTicks; i++){
    let waveValue = Math.cos(x);
    x = x + k;

    // map math function onto a scale; just play sixteenth notes
    let scaleNumber = Math.floor(waveValue * 7 * 2 ) + 24;
    if(scaleNotes[scaleNumber])
        notesToPlay.push(scaleNotes[scaleNumber]);
    else
        notesToPlay.push(60);
}

// play it

var file = new Midi.File();

// Build a track
var track = new Midi.Track();
track.setTempo(120);

file.addTrack(track);

// Make a scale
for (var i = 0; i < notesToPlay.length; i++) {
    let x=0;
    if(i%4 == 0)
        x = 2;
    else if(i%4 == 1)
        x = 2;
    else if(i%4 == 2)
        x = 1;
    else
        x = 1;

    for(let j=0; j<x; j++)
    track.addNote(0, notesToPlay[i], MusicConstants.BEAT/x);
}

// Write a MIDI file
fs.writeFileSync('test.mid', file.toBytes(), 'binary');
playMidi('test.mid');
