import { IRequest } from "./request";

export class DrumTrackRow{
    instrumentNumber: number = 0;
    pattern: string = "";
}

export class MakeDrumTrackCommand implements IRequest {
    beatsPerMinute: number;
    tracks: DrumTrackRow[];
    userId: string;
    
    constructor()
    {
        this.beatsPerMinute = 120;
        this.tracks = [];
        this.userId = '';
    }

}
