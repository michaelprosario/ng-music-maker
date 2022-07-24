import { Component, OnInit } from '@angular/core';

export class DrumTrackViewModel
{
  trackData: number[]
  constructor(
    public instrumentName: string,
    public instrumentNumber: number,
    public measureCount: number,
    public beatsPerMeasure: number)

  {
    let itemCount = measureCount*beatsPerMeasure*4;
    this.trackData = [];
    for(let i = 0; i < itemCount; i++){
      this.trackData.push(0);
    }
  }
}

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

  constructor() {
    this.tracks = [];
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

}
