import { Component, OnInit } from '@angular/core';
import { DrumTrackRow, MakeDrumTrackCommand, ServerClient } from 'src/app/core/services/server-client';
import { environment } from 'src/environments/environment';
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

  tempo: number = 180;
  beatsPerMeasure: number = 4;
  numberOfMeasures: number = 4;
  tracks: DrumTrackViewModel[];
  midiUrl: string;

  constructor(private serverClient: ServerClient) {
    this.tracks = [];
    this.midiUrl = `${environment.apiUrl}/getDrumTrack/user1`;
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

  onRandomTracks() {
    for (let track of this.tracks) {
      for (let j = 0; j < track.trackData.length; j++) {

        let k = Math.random();
        if (k < 0.20) {
          track.trackData[j] = 120;
        } else {
          track.trackData[j] = 0;
        }
      }
    }
  }

  async onPlayTracks(){
    // map tracks view model to command ...
    let command = new MakeDrumTrackCommand();
    command.beatsPerMinute = this.tempo;
    command.userId = "user1";
    command.tracks = this.getTracks();
    console.log(command);

    // execute midi file build process ...
    let response = await this.serverClient.makeDrumTrack(command);
    console.log("response from make drum track .........")
    console.log(response);

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
