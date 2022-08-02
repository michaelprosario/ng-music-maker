export class Util
{
    static SelectRandom(myArray: any[]) {
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;
    }

    static Repeat(count: number, functionToRepeat: any) {
        var k;

        for (k = 0; k < count; k++) {
            functionToRepeat();
        }
    }

    static GetNoteNumberToNameMap(){
        let map = {} as any;
        map[60] = "C";
        map[61] = "C#";
        map[61] = "D-";
        map[62] = "D";
        map[63] = "D#";
        map[63] = "E-";
        map[64] = "E";
        map[65] = "F";
        map[66] = "F#";
        map[66] = "G-";
        map[67] = "G";
        map[68] = "G#";
        map[68] = "A-";
        map[69] = "A";
        map[70] = "A#";
        map[70] = "B-";
        map[71] = "B";
        return map;
    }

    static GetNoteNameToNumberMap(){
        let map = {} as any;
        map["C"] = 60;

        map["C#"] = 61;
        map["D-"] = 61;

        map["D"] = 62;

        map["D#"] = 63;
        map["E-"] = 63;

        map["E"] = 64;
        map["F"] = 65;

        map["F#"] = 66;
        map["G-"] = 66;

        map["G"] = 67;

        map["G#"] = 68;
        map["A-"] = 68;

        map["A"] = 69;

        map["A#"] = 70;
        map["B-"] = 70;

        map["B"] = 71;
        return map;
    }

    GetChordArrayFromString(input: string)
    {
        let mapper = Util.GetNoteNameToNumberMap();
        let parts = input.split(" ");
        let response = [];
        for(let chordName of parts)
        {
            let noteNumber = mapper[chordName];
            response.push(noteNumber);
        }

        return response;
    }

}
