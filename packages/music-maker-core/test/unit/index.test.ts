import { IMidiServices } from '../../src/interfaces/midi-service';
import { ChordServices } from '../../src/services/chord-service';

describe('ChordEstimator - Estimate', () => {
    it('should return C major with C major input', () => {
        // arrange
        let midiService = {} as IMidiServices;
        let cs = new ChordServices(midiService);
        let notes = cs.GetChordArrayFromString("C E G");

        // act
        let response = cs.Estimate(notes);

        // assert
        expect(response).toBeDefined();
        expect(response?.chordName).toBe("C");
        expect(response?.chordType).toBe("major");
    });

    it('should return D with D minor input', () => {
        // arrange
        let midiService = {} as IMidiServices;
        let cs = new ChordServices(midiService);
        let notes = cs.GetChordArrayFromString("D F A");

        // act
        let response = cs.Estimate(notes);

        // assert
        expect(response).toBeDefined();
        expect(response?.chordName).toBe("D");
        expect(response?.chordType).toBe("minor");
    });

});
