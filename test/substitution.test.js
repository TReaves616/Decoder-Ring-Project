// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

// Write your tests here!
describe('substitution()', () =>{
    describe('error handling', () => {
        it('should return false the substitution alphabet is missing', () => {
            const input = 'happy';
            const alphabet = undefined;
            const expected = false;
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        })
        it('should return false if the substitution alphabet is not exactly 26 characters', () => {
            const input = 'happy';
            const alphabet = 'abcdefghijklmnopqrstuvwxyza';
            const expected = false;
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        })
        it('should return false if the substitution alphabet does not contain unique characters', () => {
            const input = 'happy';
            const alphabet = 'aacdeffhijklmnnpqrstuvwxyz';
            const expected = false;
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        })
    })

    describe('encoding a message', () => {
        it('should encode a message by using the given substitution alphabet', () => {
            const input = 'message';
            const alphabet = 'plmoknijbuhvygctfxrdzeswaq';
            const expected = 'ykrrpik';
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        })
        it('should ignore capitalization', () => {
            const input = 'Happy Birthday';
            const alphabet = '.waeszrdxtfcygvuhbijnokmpl';
            const expected = 'd.uup wxbjde.p';
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        })
        it('should should preserve spaces', () => {
            const input = 'happy birthday';
            const alphabet = '.waeszrdxtfcygvuhbijnokmpl';
            const expected = 'd.uup wxbjde.p';
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        })
    })

    describe('decoding a message', () => {
        it('should decode a message by using the given substitution alphabet', () => {
            const input = 'ykrrpik';
            const alphabet = 'plmoknijbuhvygctfxrdzeswaq';
            const encode = false;
            const expected = 'message';
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        })
        it('should ignore capitalization', () => {
            const input = 'D.uup WxbJde.P';
            const alphabet = '.waeszrdxtfcygvuhbijnokmpl';
            const encode = false;
            const expected = 'happy birthday';
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        })
        it('should should preserve spaces', () => {
            const input = 'd.uup wxbjde.p';
            const alphabet = '.waeszrdxtfcygvuhbijnokmpl';
            const encode = false;
            const expected = 'happy birthday';
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        })
    })
})