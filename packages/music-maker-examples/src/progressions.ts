import { Arpeggio1, BassPlayer1, BassPlayer2, BassPlayer3, MidiServices, OffBeatPlayer, RandomPlayer, SimplePlayer } from '@ng-music-maker/infra';
import { ChordChange, ChordType, ChordServices } from '@ng-music-maker/core';
const { exec } = require("child_process");

var fs = require('fs');
var Midi = require('jsmidgen');

let midiServices = new MidiServices();
let chordServices = new ChordServices(midiServices);

var file = new Midi.File();

// Build a track
var track = new Midi.Track();
track.setTempo(180);
file.addTrack(track);

var chordList = new Array();
chordList.push(new ChordChange(chordServices.MakeChord("e4", ChordType.Minor),4));
chordList.push(new ChordChange(chordServices.MakeChord("c4", ChordType.Major),4));
chordList.push(new ChordChange(chordServices.MakeChord("d4", ChordType.Major),4));
chordList.push(new ChordChange(chordServices.MakeChord("c4", ChordType.Major),4));

var chordPlayer = new SimplePlayer()
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new Arpeggio1()
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new RandomPlayer()
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new BassPlayer1()
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new BassPlayer2()
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new BassPlayer3()
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new OffBeatPlayer()
chordPlayer.PlayFromChordChanges(track, chordList, 0);

fs.writeFileSync('chordProgressions.mid', file.toBytes(), 'binary');
exec('timidity chordProgressions.mid')
