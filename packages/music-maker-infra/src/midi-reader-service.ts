import { Midi } from "@tonejs/midi"
var fs = require('fs');

export class MidiReaderService
{
    readMidiFile(file: string): any {
        if(!file){
            throw new Error("file is not defined");
        }

        const midiData = fs.readFileSync(file)
        const midi = new Midi(midiData);
        return midi;
    }
}
