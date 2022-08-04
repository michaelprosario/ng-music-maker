import { ChordServices, FourBarChordPhrases } from "@ng-music-maker/core";
import { MidiServices, SimplePlayer } from '@ng-music-maker/infra';


function randomInteger(max: number)
{
    let rnd = Math.random() * max;
    let response = Math.floor(rnd);
    return response;
}

// Get 4 chord phrases ...
let fourBarPhrases = new FourBarChordPhrases();
let phrases  = fourBarPhrases.GetPhrases();

// Randomly select phrase ...
let p1 = randomInteger(13);
let phrase1 = phrases[p1];

// Randomly select second phrase ...
let p2 = randomInteger(13);
let phrase2 = phrases[p2];


// Print out chords ...
console.log(phrase1);
console.log(phrase2);

// Build player ...

// Build a track

let midiServices = new MidiServices();
//let scaleServices = new ScaleService(midiServices);
let chordServices = new ChordServices(midiServices);


var fs = require('fs');
var Midi = require('jsmidgen');

var file = new Midi.File();
var track = new Midi.Track();
track.setTempo(80);
file.addTrack(track);

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


var chordPlayer = new SimplePlayer()
chordPlayer.PlayFromChordChanges(track, chordList, 0);


// Execute player ...
fs.writeFileSync('song1.mid', file.toBytes(), 'binary');
