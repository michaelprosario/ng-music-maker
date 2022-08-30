import { MakeSongFromChordsCommand, ServerClient } from 'src/app/core/services/server-client';
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as Blockly from 'blockly';
import { environment } from 'src/environments/environment';
declare var Blockly: any;

let chordsToPlay: Array<any> = [];

function addChord(root: string, type: number, measures: number){
  chordsToPlay.push({"rootNote": root, "chordType": type, "measures": measures});
}

@Component({
  selector: 'app-edit-progression-player',
  templateUrl: './edit-progression-player.component.html',
  styleUrls: ['./edit-progression-player.component.scss']
})
export class EditProgressionPlayerComponent implements OnInit {

  workspace: any;
  midiUrl: string;

  // @ts-ignore
  constructor(private serverClient: ServerClient) {
    this.midiUrl = `${environment.apiUrl}/getSong/user1`;
  }

  ngOnInit() {
    const blocklyDiv = document.getElementById('divBlockly');
    const xmlToolBox = document.getElementById('xmlToolBox');

    if(!blocklyDiv){
      alert("blocklyDiv not found");
      return;
    }

    this.workspace = Blockly.inject(blocklyDiv, {
      readOnly: false,
      media: 'media/',
      trashcan: true,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true
      },
      toolbox:  xmlToolBox?.outerHTML   } as Blockly.BlocklyOptions);
  }

  executeCode(){
    var code = Blockly.JavaScript.workspaceToCode(this.workspace);
    chordsToPlay = [];
    console.log(code);
    eval(code);
    console.log(chordsToPlay);

    // send request to server
    const command = new MakeSongFromChordsCommand();
    command.chords = chordsToPlay;
    command.userId = "user1";
    this.serverClient.makeSongFromChords(command);

    this.playSong();
  }

  private playSong() {
    let midiPlayer = document.getElementById("midiPlayer");
    // @ts-ignore
    midiPlayer.reload();
    // @ts-ignore
    setTimeout(() => { midiPlayer.start(); }, 3000);
  }
}
