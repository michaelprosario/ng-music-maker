import { ChordServices, ScaleService } from "@ng-music-maker/core";
import { MidiServices } from "./midi-services";

export class MusicMaker
{
    midi: MidiServices;
    scale: ScaleService;
    chord: ChordServices;
    constructor(){
        this.midi = new MidiServices();
        this.scale = new ScaleService(this.midi);
        this.chord = new ChordServices(this.midi);
    }

}
