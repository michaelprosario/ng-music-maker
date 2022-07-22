import { MakeDrumTrackCommand } from "../requests/make-drum-track-command";

export interface IMidiServices
{
    makeDrumTrack(command: MakeDrumTrackCommand): import("..").MakeDrumTrackResponse;
    GetNoteNumber(note: any): number;

}
