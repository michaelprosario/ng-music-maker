import { ScaleType } from "../enums";
import { IMidiServices } from "../interfaces/midi-service";

export class ScaleService
{
    constructor(private midiServices: IMidiServices){

    }

    MakeScale(note: any, type: ScaleType, octaves: number) {
        var intStartNote = this.midiServices.GetNoteNumber(note);

        var scale = new Array();

        if (type == ScaleType.Major) {

            var currentNote = intStartNote;
            scale.push(currentNote);

            var k;
            for (k = 0; k < octaves; k++) {

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 1;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 1;
                scale.push(currentNote);
            }

        }
        else if (type == ScaleType.Minor) {
            var currentNote = intStartNote;
            scale.push(currentNote);

            var k;
            for (k = 0; k < octaves; k++) {

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 1;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 1;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);
            }

        }
        else if (type == ScaleType.Spanish) {
            var currentNote = intStartNote;
            scale.push(currentNote);

            var k;
            for (k = 0; k < octaves; k++) {

                currentNote = currentNote + 1;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);

                currentNote = currentNote + 1;
                scale.push(currentNote);

                currentNote = currentNote + 2;
                scale.push(currentNote);
            }

        }

        else if (type == ScaleType.MinorPentatonic) {
            var currentNote = intStartNote;
            scale.push(currentNote);

            var k;
            for (k = 0; k < octaves; k++) {

                currentNote = currentNote + 3; //b3
                scale.push(currentNote);

                currentNote = currentNote + 2; //4
                scale.push(currentNote);

                currentNote = currentNote + 2; // 5
                scale.push(currentNote);

                currentNote = currentNote + 3; // b7
                scale.push(currentNote);

                currentNote = currentNote + 2; // root
                scale.push(currentNote);


            }

        }
        else if (type == ScaleType.Blues) {
            var currentNote = intStartNote;
            scale.push(currentNote);

            var k;
            for (k = 0; k < octaves; k++) {

                currentNote = currentNote + 3; //b3
                scale.push(currentNote);

                currentNote = currentNote + 2; //4
                scale.push(currentNote);
                scale.push(currentNote + 1);


                currentNote = currentNote + 2; // 5
                scale.push(currentNote);

                currentNote = currentNote + 3; // b7
                scale.push(currentNote);

                currentNote = currentNote + 2; // root
                scale.push(currentNote);


            }

        }
        else if (type == ScaleType.MajorPentatonic) {
            var currentNote = intStartNote;
            scale.push(currentNote);

            var k;
            for (k = 0; k < octaves; k++) {

                currentNote = currentNote + 4; //2
                scale.push(currentNote);

                currentNote = currentNote + 1; //3
                scale.push(currentNote);

                currentNote = currentNote + 2; //5
                scale.push(currentNote);

                currentNote = currentNote + 4; //6
                scale.push(currentNote);

                currentNote = currentNote + 1; // root
                scale.push(currentNote);

            }

        }
        else {
            throw new Error("Scale type not handled")
        }

        return scale

    }
}
