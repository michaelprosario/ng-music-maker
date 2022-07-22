import express, { Request, Response } from 'express';
import { MakeDrumTrackCommand, MakeDrumTrackService } from '@ng-music-maker/core';
import { MidiServices } from '@ng-music-maker/infra';
const router = express.Router()

router.post('/add', (req: Request, res: Response) => {
  let a: number = parseInt(req.body.a);
  let b: number = parseInt(req.body.b);
  let response = a+b;

  res.send('respnose = ' + response);
});

router.post('/makeDrumTrack', (req: Request, res: Response) => {


  let command: MakeDrumTrackCommand = req.body as unknown as MakeDrumTrackCommand;

  let midiService = new MidiServices();
  let makeDrumTrackService = new MakeDrumTrackService(midiService);
  let response = makeDrumTrackService.makeDrumTrack(command);
  res.json(response);
});

module.exports = router
