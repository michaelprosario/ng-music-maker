import { Component, OnInit } from '@angular/core';
import { DrumTrackRow, MakeDrumTrackCommand, ServerClient } from 'src/app/core/services/server-client';
import { DrumTrackViewModel } from './drum-track-view-model';

/*
- create setup panel
  - what are parameters?
    - tempo
      - default to 80
    - beats per measure
    - number of measures
      - range
        - 1 to n

*/
@Component({
  selector: 'app-edit-drum-track',
  templateUrl: './edit-drum-track.component.html',
  styleUrls: ['./edit-drum-track.component.scss']
})
export class EditDrumTrackComponent implements OnInit {

  tempo: number = 80;
  beatsPerMeasure: number = 4;
  numberOfMeasures: number = 4;
  tracks: DrumTrackViewModel[];

  constructor(private serverClient: ServerClient) {
    this.tracks = [];
  }

  onGetTracks(){
    console.log(this.tracks)
  }

  ngOnInit(): void {
    let aTrack = new DrumTrackViewModel("Cow bell", 56, this.numberOfMeasures, this.beatsPerMeasure);
    this.tracks.push(aTrack);

    aTrack = new DrumTrackViewModel("Base Drum", 36, this.numberOfMeasures, this.beatsPerMeasure);
    this.tracks.push(aTrack);
    aTrack = new DrumTrackViewModel("Snare Drum", 38, this.numberOfMeasures, this.beatsPerMeasure);
    this.tracks.push(aTrack);
    aTrack = new DrumTrackViewModel("Closed High hat", 42, this.numberOfMeasures, this.beatsPerMeasure);
    this.tracks.push(aTrack);

  }

  async onPlayTracks(){
    // map tracks view model to command ...
    let command = new MakeDrumTrackCommand();
    command.beatsPerMinute = this.beatsPerMeasure;
    command.userId = "user1";
    command.tracks = this.getTracks();

    // execute midi file build process ...
    let response = await this.serverClient.makeDrumTrack(command);

    // build reference to midi file

    // play it
  }

  getTracks(): DrumTrackRow[] {
    let drumTracks = [];
    for(let track of this.tracks)
    {
      let drumTrackRow = new DrumTrackRow();
      drumTrackRow.instrumentNumber = track.instrumentNumber;
      let drumString = "";
      for(let i=0; i< track.trackData.length; i++)
      {
        let currentValue = track.trackData[i];
        if(currentValue > 0)
        {
          drumString += "x"
        }else{
          drumString += "-"
        }
      }
      drumTrackRow.pattern = drumString;

      drumTracks.push(drumTrackRow);
    }

    return drumTracks;
  }

}
