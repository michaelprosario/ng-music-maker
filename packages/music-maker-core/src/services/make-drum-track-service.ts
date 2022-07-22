import { IMidiServices } from "../interfaces/midi-service";
import { MakeDrumTrackCommand } from "../requests/make-drum-track-command";
import { MakeDrumTrackResponse } from "../response/make-drum-track-response";

export class MakeDrumTrackService
{
    constructor(private midiService: IMidiServices){

    }

    makeDrumTrack(command: MakeDrumTrackCommand) : MakeDrumTrackResponse{
        let response: MakeDrumTrackResponse = new MakeDrumTrackResponse();

        // make sure command is defined
        if(!command){
            response.message = "command is not defined";
            response.code = 400;
            return response;
        }

        // make sure command is filled out
        if(command.tracks.length === 0){
            response.message = "command.tracks is not defined";
            response.code = 400;
            return response;
        }

        // make sure user is defined
        if(!command.userId || command.userId.length === 0){
            response.message = "command.userId is not defined";
            response.code = 400;
            return response;
        }

        return this.midiService.makeDrumTrack(command);
    }
}
