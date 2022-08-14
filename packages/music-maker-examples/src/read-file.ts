import { MidiReaderService } from '@ng-music-maker/infra';


let readerService = new MidiReaderService();

let midi = readerService.readMidiFile("three.mid");
// @ts-ignore
midi.tracks.forEach(track => {
    const notes = track.notes
    // @ts-ignore
    notes.forEach(note => {
        console.log(note)
    })
})
