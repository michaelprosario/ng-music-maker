import { ChordType } from "../enums";
import { ChordChange2 } from "../value-objects/chord-change2";

export class FourBarChordPhrases {
    constructor() {
    }

    GetPhrases() {
        let phrases = [];

        // 1  | 4 | 6m 5 | 4
        let phrase = [];
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrase.push(new ChordChange2(4, ChordType.Major, 4));
        phrase.push(new ChordChange2(6, ChordType.Minor, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 2));
        phrase.push(new ChordChange2(4, ChordType.Major, 4));
        phrases.push(phrase);

        // 1  | 5 | 4 | 4
        phrase = [];
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrase.push(new ChordChange2(5, ChordType.Major, 4));
        phrase.push(new ChordChange2(4, ChordType.Major, 4));
        phrase.push(new ChordChange2(4, ChordType.Major, 4));
        phrases.push(phrase);

        // 1  | 5 | 6m | 4
        phrase = [];
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrase.push(new ChordChange2(5, ChordType.Major, 4));
        phrase.push(new ChordChange2(6, ChordType.Minor, 4));
        phrase.push(new ChordChange2(4, ChordType.Major, 4));
        phrases.push(phrase);

        // 1 | 1 | 1 | 1 |
        phrase = [];
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrases.push(phrase);

        // 1 | 1 | 5 | 5 |
        phrase = [];
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrase.push(new ChordChange2(5, ChordType.Major, 4));
        phrase.push(new ChordChange2(5, ChordType.Major, 4));
        phrases.push(phrase);

        // 1 1 | 4 | 6m 5 | 4
        phrase = [];
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrase.push(new ChordChange2(4, ChordType.Major, 4));
        phrase.push(new ChordChange2(6, ChordType.Minor, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 2));
        phrase.push(new ChordChange2(4, ChordType.Major, 4));
        phrases.push(phrase);

        // 1 3m | 4 5 | 1 3m | 4 5
        phrase = [];
        phrase.push(new ChordChange2(1, ChordType.Major, 2));
        phrase.push(new ChordChange2(3, ChordType.Minor, 2));
        phrase.push(new ChordChange2(4, ChordType.Major, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 2));
        phrase.push(new ChordChange2(1, ChordType.Major, 2));
        phrase.push(new ChordChange2(3, ChordType.Minor, 2));
        phrase.push(new ChordChange2(4, ChordType.Major, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 2));

        phrases.push(phrase);

        // 1 4 | 5 | 6m 4 | 5
        phrase = [];
        phrase.push(new ChordChange2(1, ChordType.Major, 2));
        phrase.push(new ChordChange2(4, ChordType.Major, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 4));
        phrase.push(new ChordChange2(6, ChordType.Minor, 2));
        phrase.push(new ChordChange2(4, ChordType.Major, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 4));
        phrases.push(phrase);

        // 1 5 | 6m 1 | 4 5 | 1
        phrase = [];
        phrase.push(new ChordChange2(1, ChordType.Major, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 2));
        phrase.push(new ChordChange2(6, ChordType.Minor, 2));
        phrase.push(new ChordChange2(1, ChordType.Major, 2));
        phrase.push(new ChordChange2(4, ChordType.Major, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 2));
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrases.push(phrase);

        // 1 5 | 6m 4 | 1 5 | 1 5
        phrase = [];
        phrase.push(new ChordChange2(1, ChordType.Major, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 2));
        phrase.push(new ChordChange2(6, ChordType.Minor, 2));
        phrase.push(new ChordChange2(4, ChordType.Major, 2));
        phrase.push(new ChordChange2(1, ChordType.Major, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 2));
        phrase.push(new ChordChange2(1, ChordType.Major, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 2));
        phrases.push(phrase);

        // 2 | 4 | 2 | 4
        phrase = [];
        phrase.push(new ChordChange2(2, ChordType.Major, 4));
        phrase.push(new ChordChange2(4, ChordType.Major, 4));
        phrase.push(new ChordChange2(2, ChordType.Major, 4));
        phrase.push(new ChordChange2(4, ChordType.Major, 4));
        phrases.push(phrase);

        // 4 | 5 | 1 | 1
        phrase = [];
        phrase.push(new ChordChange2(4, ChordType.Major, 4));
        phrase.push(new ChordChange2(5, ChordType.Major, 4));
        phrase.push(new ChordChange2(6, ChordType.Minor, 4));
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrases.push(phrase);

        // 4 5 | 4 5 | 4 5 | 1
        phrase = [];
        phrase.push(new ChordChange2(4, ChordType.Major, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 2));
        phrase.push(new ChordChange2(4, ChordType.Minor, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 2));
        phrase.push(new ChordChange2(4, ChordType.Major, 2));
        phrase.push(new ChordChange2(5, ChordType.Major, 2));
        phrase.push(new ChordChange2(1, ChordType.Major, 4));
        phrases.push(phrase);

        return phrases;
    }
}
