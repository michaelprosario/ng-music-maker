import { IAppResponse } from "./app-response";

export class MakeDrumTrackResponse implements IAppResponse {
    code: number = 200;
    message: string = "";
    errors: string[] = [];
    file: string = "";
}
