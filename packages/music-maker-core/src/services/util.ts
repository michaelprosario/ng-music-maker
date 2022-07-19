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
}
