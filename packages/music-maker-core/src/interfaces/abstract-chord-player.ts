
export abstract class AbstractChordPlayer {
    abstract PlayFourBarPattern(track: any, channel: number, chordChange: any): void;
    abstract PlayThreeBarPattern(track: any, channel: number, chordChange: any): void;
    abstract PlayTwoBarPattern(track: any, channel: number, chordChange: any): void;
    abstract PlayOneBarPattern(track: any, channel: number, chordChange: any): void;

    PlayFromChordChanges(track: any, chordList: any, channel: number) {

        for (var chordChange of chordList) {
            if (chordChange.Length == 2) {
                this.PlayTwoBarPattern(track, channel, chordChange);
            }
            else if (chordChange.Length == 4) {
                this.PlayFourBarPattern(track, channel, chordChange);
            }
            else if (chordChange.Length == 3) {
                this.PlayFourBarPattern(track, channel, chordChange);
            }
            else if (chordChange.Length == 1) {
                this.PlayOneBarPattern(track, channel, chordChange);
            } else {
                track.addChord(channel, chordChange.Chord, chordChange.Length * 128);
            }

        }
    }
}
