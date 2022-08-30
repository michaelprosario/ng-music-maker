import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class DrumTrackRow{
    instrumentNumber: number = 0;
    pattern: string = "";
}

export class MakeDrumTrackCommand {
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

export class MakeSongFromChordsCommand {
    chords: Array<any> = [];
    userId: string = '';

    constructor()
    {
        this.userId = '';
    }
}


@Injectable({
    providedIn: 'root'
})
export class ServerClient {

    constructor(private http: HttpClient) { }

    public async makeDrumTrack(command: MakeDrumTrackCommand) {
        if (!command) {
            throw new Error('Command is not defined');
        }

        return this.http.post(`${environment.apiUrl}/makeDrumTrack`, command).toPromise();
    }

    public async makeSongFromChords(command: MakeSongFromChordsCommand) {
        if (!command) {
            throw new Error('Command is not defined');
        }

        return this.http.post(`${environment.apiUrl}/makeSongFromChords`, command).toPromise();
    }

}
