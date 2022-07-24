import { Component, Input, OnInit } from '@angular/core';
import { DrumTrackViewModel } from "../edit-drum-track/drum-track-view-model";

@Component({
  selector: 'app-drum-track-row',
  templateUrl: './drum-track-row.component.html',
  styleUrls: ['./drum-track-row.component.scss']
})
export class DrumTrackRowComponent implements OnInit {

  @Input()
  track: DrumTrackViewModel
  constructor() {
    this.track = new DrumTrackViewModel("", 0, 0,0);
  }

  ngOnInit(): void {
  }

  onCellClick(track: DrumTrackViewModel, index: number): void {

    let cellValue = track.trackData[index];
    if(cellValue === 0){
      track.trackData[index] = 120;
    }else{
      track.trackData[index] = 0;
    }

    console.log(track);

  }


}
