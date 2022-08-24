import { ChordServices, DrumNotes, FourBarChordPhrases } from "@ng-music-maker/core";
import { Arpeggio1, BassPlayer3, MidiServices, RandomPlayer } from '@ng-music-maker/infra';
const { exec } = require("child_process");

function randomInteger(max: number)
{
    let rnd = Math.random() * max;
    let response = Math.floor(rnd);
    return response;
}

// Get 4 chord phrases ...
let fourBarPhrases = new FourBarChordPhrases();
let phrases  = fourBarPhrases.GetPhrases();
phrases = phrases.filter(phrase => phrase.length == 4 || phrase.length == 6);

// Randomly select phrase ...
let p1 = randomInteger(phrases.length);
let phrase1 = phrases[p1];

// Randomly select second phrase ...
let p2 = randomInteger(phrases.length);
let phrase2 = phrases[p2];

// Print out chords ...
console.log(phrase1);
console.log(phrase2);

let midiServices = new MidiServices();
let chordServices = new ChordServices(midiServices);

var fs = require('fs');
var Midi = require('jsmidgen');

var file = new Midi.File();

var track = new Midi.Track();
track.instrument(0, 1);
var track2 = new Midi.Track();
track2.instrument(1, 1);
var track3 = new Midi.Track();
var track4 = new Midi.Track();
var track5 = new Midi.Track();
var track6 = new Midi.Track();

var tempo = 150;
track6.setTempo(tempo);

file.addTrack(track);
file.addTrack(track2);
file.addTrack(track3);
file.addTrack(track4);
file.addTrack(track5);
file.addTrack(track6);

var chordList = new Array();

let part1 = chordServices.MakeChordChangesFromChordChange2(phrase1);
let part2 = chordServices.MakeChordChangesFromChordChange2(phrase2);

for(let k=0; k<3; k++){
    for(let chordChange of part1)
    {
        chordList.push(chordChange);
    }
    for(let chordChange of part1)
    {
        chordList.push(chordChange);
    }
    for(let chordChange of part2)
    {
        chordList.push(chordChange);
    }
    for(let chordChange of part2)
    {
        chordList.push(chordChange);
    }
}

var chordPlayer = new Arpeggio1()
chordPlayer.PlayFromChordChanges(track, chordList, 0);

var chordPlayer2 = new RandomPlayer()
chordPlayer2.PlayFromChordChanges(track2, chordList, 0);

var chordPlayer3 = new BassPlayer3()
chordPlayer3.PlayFromChordChanges(track3, chordList, 0);

let mm = midiServices;
var addRhythmPattern = mm.AddRhythmPattern;
addRhythmPattern(track4, "x---x---x---x---x---x---x---x--x".repeat(4*8),DrumNotes.BassDrum1);
addRhythmPattern(track5, "----x-------x-------x-------x--x".repeat(4*8),DrumNotes.SnareDrum);
addRhythmPattern(track6, "x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-".repeat(4*8),DrumNotes.ClosedHighHat);

// Execute player ...
fs.writeFileSync('song1.mid', file.toBytes(), 'binary');
exec('timidity song1.mid');
