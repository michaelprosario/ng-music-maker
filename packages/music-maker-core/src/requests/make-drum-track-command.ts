export class DrumTrackRow{
    instrumentNumber: number = 0;
    pattern: string = "";
}

export class MakeDrumTrackCommand {
    beatsPerMinute: number = 120;
    tracks: DrumTrackRow[] = [];
}
