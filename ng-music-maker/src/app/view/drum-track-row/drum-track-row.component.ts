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

  onPattern1(){
    let trackCopy = { ...this.track } as DrumTrackViewModel;
    for(let i=0; i<trackCopy.trackData.length; i++){
      if(i % 4 === 0){
        trackCopy.trackData[i] = 120;
      }else{
        trackCopy.trackData[i] = 0;
      }
    }

    this.track = trackCopy;
  }

  onPattern2(){
    let trackCopy = { ...this.track } as DrumTrackViewModel;
    for(let i=0; i<trackCopy.trackData.length; i++){
      if(i % 2 === 0){
        trackCopy.trackData[i] = 120;
      }else{
        trackCopy.trackData[i] = 0;
      }
    }

    this.track = trackCopy;
  }

  onPattern3(){
    let trackCopy = { ...this.track } as DrumTrackViewModel;
    for(let i=0; i<trackCopy.trackData.length; i++){
      if(i % 8 === 4){
        trackCopy.trackData[i] = 120;
      }else{
        trackCopy.trackData[i] = 0;
      }
    }

    this.track = trackCopy;
  }

  onPattern4(){
    let trackCopy = { ...this.track } as DrumTrackViewModel;
    for(let i=0; i<trackCopy.trackData.length; i++){
      let k = Math.random();
      if(k < 0.2){
        trackCopy.trackData[i] = 120;
      }else{
        trackCopy.trackData[i] = 0;
      }
    }

    this.track = trackCopy;

  }

  onClear(){
    let trackCopy = { ...this.track } as DrumTrackViewModel;
    for(let i=0; i<trackCopy.trackData.length; i++){
      trackCopy.trackData[i] = 0;
    }

    this.track = trackCopy;
  }

}
