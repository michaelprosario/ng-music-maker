import { Arpeggio1, BassPlayer1, BassPlayer2, BassPlayer3, MidiServices, OffBeatPlayer, RandomPlayer, SimplePlayer } from '@ng-music-maker/infra';
import { ScaleService, ScaleType, DrumNotes, ChordChange, ChordType, ChordServices } from '@ng-music-maker/core';

var fs = require('fs');
var Midi = require('jsmidgen');

let midiServices = new MidiServices();
let scaleServices = new ScaleService(midiServices);
let chordServices = new ChordServices(midiServices);

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

function threeNotes() {
    var file = new Midi.File();

    // Build a track
    var track = new Midi.Track();
    track.setTempo(80);
    file.addTrack(track);

    let mm = midiServices;
    let beat = 50;
    track.addNote(0, mm.GetNoteNumber("c4"), beat);
    track.addNote(0, mm.GetNoteNumber("d4"), beat);
    track.addNote(0, mm.GetNoteNumber("e4"), beat);

    // Write a MIDI file
    fs.writeFileSync('test2.mid', file.toBytes(), 'binary');
}

function drumTest()
{
    var file = new Midi.File();

    // Build a track
    var track = new Midi.Track();
    track.setTempo(80);
    file.addTrack(track);

    let mm = midiServices;

    var addRhythmPattern = mm.AddRhythmPattern;
    addRhythmPattern(track, "x-x-|x-x-|xxx-|x-xx",DrumNotes.ClosedHighHat);
    fs.writeFileSync('drumTest.mid', file.toBytes(), 'binary');
}

function chordProgressions(){
    var file = new Midi.File();

    // Build a track
    var track = new Midi.Track();
    track.setTempo(80);
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
}


makeScale();
threeNotes();
drumTest();
chordProgressions();
