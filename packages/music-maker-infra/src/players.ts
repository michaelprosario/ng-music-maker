import { ChordChange, MusicConstants, AbstractChordPlayer, Util } from "@ng-music-maker/core";
import { ITrack } from "./track";

export class Arpeggio1 extends AbstractChordPlayer {

    PlayFourBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0], MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[1], MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[2], MusicConstants.BEAT / 2);

        track.addNote(channel, chordChange.Chord[0], MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[1], MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[2], MusicConstants.BEAT / 2);
    }

    PlayThreeBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0], MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[1], MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[2], MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[0], MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, MusicConstants.BEAT / 2);
    }

    PlayTwoBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0], MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[1], MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[2], MusicConstants.BEAT / 2);
    }

    PlayOneBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0], MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[2], MusicConstants.BEAT / 2);
    }

}

export class BassPLayer1 extends AbstractChordPlayer {

    noteDelta = 24;
    PlayFourBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, MusicConstants.BEAT * 3);
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, MusicConstants.BEAT);
    }

    PlayThreeBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, MusicConstants.BEAT * 3);
    }

    PlayTwoBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, MusicConstants.BEAT * 2);
    }

    PlayOneBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, MusicConstants.BEAT * 1);
    }
}

export class BassPLayer2 extends AbstractChordPlayer {

    noteDelta = 24;
    PlayFourBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        var i = 0;

        for (i = 0; i < 8; i++)
            track.addNote(channel, chordChange.Chord[0] - this.noteDelta, MusicConstants.BEAT / 2);

    }

    PlayThreeBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        var i = 0;

        for (i = 0; i < 6; i++)
            track.addNote(channel, chordChange.Chord[0] - this.noteDelta, MusicConstants.BEAT / 2);
    }

    PlayTwoBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        var i;
        for (i = 0; i < 4; i++)
            track.addNote(channel, chordChange.Chord[0] - this.noteDelta, MusicConstants.BEAT / 2);

    }

    PlayOneBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, MusicConstants.BEAT / 2);
    }
}

export class RandomPlayer extends AbstractChordPlayer {

    PlayFourBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        var i = 0;

        for (i = 0; i < 8; i++) {
            track.addNote(channel, Util.SelectRandom(chordChange.Chord), MusicConstants.BEAT / 2);
        }

    }

    PlayThreeBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        var i = 0;

        for (i = 0; i < 6; i++) {
            track.addNote(channel, Util.SelectRandom(chordChange.Chord), MusicConstants.BEAT / 2);
        }
    }

    PlayTwoBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        var i;
        for (i = 0; i < 4; i++) {
            track.addNote(channel, Util.SelectRandom(chordChange.Chord), MusicConstants.BEAT / 2);
        }

    }

    PlayOneBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0], MusicConstants.BEAT / 2);
        track.addNote(channel, chordChange.Chord[0] + 12, MusicConstants.BEAT / 2);
    }
}

export class BassPLayer3 extends AbstractChordPlayer {

    PlayFourBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, MusicConstants.BEAT * 1.5);
        track.addNote(channel, chordChange.Chord[0] - 12, MusicConstants.BEAT * 1.5);
        track.addNote(channel, chordChange.Chord[0] - 12, MusicConstants.BEAT);
    }

    PlayThreeBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, MusicConstants.BEAT * 1.5);
        track.addNote(channel, chordChange.Chord[0] - 12, MusicConstants.BEAT * 1.5);
        track.addNote(channel, chordChange.Chord[0] - 12, MusicConstants.BEAT);
    }

    PlayTwoBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, MusicConstants.BEAT * 2);

    }

    PlayOneBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, MusicConstants.BEAT);
    }
}

export class SimplePlayer extends AbstractChordPlayer {

    PlayFourBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addChord(channel, chordChange.Chord, chordChange.Length * MusicConstants.BEAT);
    }

    PlayThreeBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addChord(channel, chordChange.Chord, chordChange.Length * MusicConstants.BEAT);
    }

    PlayTwoBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addChord(channel, chordChange.Chord, chordChange.Length * MusicConstants.BEAT);
    }

    PlayOneBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addChord(channel, chordChange.Chord, chordChange.Length * MusicConstants.BEAT);
    }
}

export class OffBeatPlayer extends AbstractChordPlayer {

    PlayFourBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, 0, MusicConstants.BEAT, 0)
        track.addChord(channel, chordChange.Chord, MusicConstants.BEAT);
        track.addNote(channel, 0, MusicConstants.BEAT, 0)
        track.addChord(channel, chordChange.Chord, MusicConstants.BEAT);
    }

    PlayThreeBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, 0, MusicConstants.BEAT, 0)
        track.addChord(channel, chordChange.Chord, MusicConstants.BEAT);
        track.addNote(channel, 0, MusicConstants.BEAT, 0)
    }

    PlayTwoBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addNote(channel, 0, MusicConstants.BEAT, 0)
        track.addChord(channel, chordChange.Chord, MusicConstants.BEAT);
    }

    PlayOneBarPattern(track: ITrack, channel: number, chordChange: ChordChange) {
        track.addChord(channel, chordChange.Chord, MusicConstants.BEAT);
    }
}
