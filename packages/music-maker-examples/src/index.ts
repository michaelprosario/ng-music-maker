import { MusicMaker, BassPlayer1, SimplePlayer } from '@ng-music-maker/infra';
import { ChordType } from '@ng-music-maker/core';
import { IChordWithMeasures } from 'music-maker-core/dist';
import { playMidi } from './play-midi';

var fs = require('fs');
var Midi = require('jsmidgen');

let musicMaker = new MusicMaker();
let chordServices = musicMaker.chord;

var file = new Midi.File();

// Build a track
var track = new Midi.Track();
file.addTrack(track);

var track2 = new Midi.Track();
file.addTrack(track2);
track2.setTempo(140);

let input = [
    { rootNote: "c4", chordType: ChordType.Major, measures: 4 },
    { rootNote: "a4", chordType: ChordType.Minor7, measures: 4 },
    { rootNote: "f4", chordType: ChordType.Major, measures: 4 },
    { rootNote: "g4", chordType: ChordType.Major, measures: 4 },

    { rootNote: "c4", chordType: ChordType.Major, measures: 4 },
    { rootNote: "a4", chordType: ChordType.Minor7, measures: 4 },
    { rootNote: "f4", chordType: ChordType.Major, measures: 4 },
    { rootNote: "g4", chordType: ChordType.Major, measures: 4 },

] as IChordWithMeasures[]
let chordList = chordServices.MakeChordList(input);

var chordPlayer = new SimplePlayer()
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new BassPlayer1()
chordPlayer.PlayFromChordChanges(track2, chordList, 0);

fs.writeFileSync('chordProgressions2.mid', file.toBytes(), 'binary');
playMidi('chordProgressions2.mid')
