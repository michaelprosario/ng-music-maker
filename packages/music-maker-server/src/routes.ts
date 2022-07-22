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

router.get('/getDrumTrack/:userId', (req: Request, res: Response) => {

  let userId = req.params["userId"];
  let fileName = "drumTrack_" + userId + ".mid";
  let path = ".//output//" + fileName;
  console.log("path to download................");
  console.log(path);

  res.download(path, function(error){
    console.log("Error : ", error)
});
});


module.exports = router
