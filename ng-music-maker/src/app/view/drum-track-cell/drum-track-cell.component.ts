import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drum-track-cell',
  templateUrl: './drum-track-cell.component.html',
  styleUrls: ['./drum-track-cell.component.scss']
})
export class DrumTrackCellComponent implements OnInit {

  @Input()
  trackCellValue: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
