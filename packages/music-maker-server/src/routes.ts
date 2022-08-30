import express, { Request, Response } from 'express';
import { MakeDrumTrackCommand, MakeDrumTrackService, MakeSongFromChordsCommand } from '@ng-music-maker/core';
import { MidiServices } from '@ng-music-maker/infra';
import { MusicMaker, BassPlayer1, SimplePlayer } from '@ng-music-maker/infra';
import { ChordType } from '@ng-music-maker/core';
import { IChordWithMeasures } from 'music-maker-core/dist';
import { playMidi } from './play-midi';

var fs = require('fs');
var Midi = require('jsmidgen');

const router = express.Router()

router.post('/add', (req: Request, res: Response) => {
  let a: number = parseInt(req.body.a);
  let b: number = parseInt(req.body.b);
  let response = a+b;

  res.send('respnose = ' + response);
});

router.post('/makeDrumTrack', (req: Request, res: Response) => {

  /*  #swagger.requestBody = {
          required: true
          description: 'makes drum track midi for user',
          schema: {
            $userId: 'mrosario',
            $beatsPerMinute: 79,
            tracks:[{
                    $instrumentNumber: 56,
                    $pattern: 'x-x-|x-x-|xxx-|x-xx|x-x-|x-x-|xxx-|x-xx|x-x-|x-x-|xxx-|x-xx|x-x-|x-x-|xxx-|x-xx|'
                }]
            }
  } */

  let command: MakeDrumTrackCommand = req.body as unknown as MakeDrumTrackCommand;

  let midiService = new MidiServices();
  let makeDrumTrackService = new MakeDrumTrackService(midiService);
  let response = makeDrumTrackService.makeDrumTrack(command);
  res.json(response);
});

router.post('/makeSongFromChords', (req: Request, res: Response) => {

  let command: MakeSongFromChordsCommand = req.body as unknown as MakeSongFromChordsCommand;

  let musicMaker = new MusicMaker();
  let chordServices = musicMaker.chord;

  var file = new Midi.File();

  // Build a track
  var track = new Midi.Track();
  file.addTrack(track);

  var track2 = new Midi.Track();
  file.addTrack(track2);
  track2.setTempo(140);

  let input = command.chords as IChordWithMeasures[]
  let chordList = chordServices.MakeChordList(input);

  var chordPlayer = new SimplePlayer()
  chordPlayer.PlayFromChordChanges(track, chordList, 0);

  chordPlayer = new BassPlayer1()
  chordPlayer.PlayFromChordChanges(track2, chordList, 0);

  let midiFile = 'song-from-chords.mid';
  fs.writeFileSync(midiFile, file.toBytes(), 'binary');

  playMidi(midiFile);

  res.json({ "code": 200, "message": "ok" });
});

router.get('/getDrumTrack/:userId', (req: Request, res: Response) => {

  let userId = req.params["userId"];
  let fileName = "drumTrack_" + userId + ".mid";
  let path = ".//output//" + fileName;
  res.download(path, fileName);
});


module.exports = router
