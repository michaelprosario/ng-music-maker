import { ScaleType } from "../enums";

export class MakeMelodyCommand
{
    scaleRoot: number = 60;
    scaleType: ScaleType = ScaleType.Major;
    phraseLengthInBeats: number = 16;
}
