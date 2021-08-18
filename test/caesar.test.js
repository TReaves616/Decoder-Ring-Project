// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

// Write your tests here!
describe('caesar()', () =>{
    describe('error handling', () => {
        it('should return false if the shift amount is 0', () => {
            const input = 'happy';
            const shift = 0;
            const expected = false;
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
        it('should return false if the shift amount is above 25', () => {
            const input = 'happy';
            const shift = 26;
            const expected = false;
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
        it('should return false if the shift amount is less than  -25', () => {
            const input = 'happy';
            const shift = -26;
            const expected = false;
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
    })

    describe('encoding a message', () => {
        it('should encode a message by shifting the letters', () => {
            const input = 'happy';
            const shift = 3;
            const expected = 'kdssb';
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
        it('should leaves spaces and other symbols as is', () => {
            const input = 'happy birthday!';
            const shift = 3;
            const expected = 'kdssb eluwkgdb!';
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
        it('should ignore capital letters', () => {
            const input = 'HAPPY';
            const shift = 3;
            const expected = 'kdssb';
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
        it('should appropriately handle letters at the end of the alphabet', () => {
            const input = 'zebra zeppelins';
            const shift = 3;
            const expected = 'cheud chssholqv';
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
        it('should allow for a negative shift that will shift to the left', () => {
            const input = 'zebra zeppelins';
            const shift = -3;
            const expected = 'wbyox wbmmbifkp';
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
    })

    describe('decoding a message', () => {
        it('should decode a message by shifting the letters', () => {
            const input = 'kdssb';
            const shift = 3;
            const encode = false;
            const expected = 'happy';
            const actual = caesar(input, shift, encode);
            expect(actual).to.equal(expected);
        })
        it('should leaves spaces and other symbols as is', () => {
            const input = 'kdssb eluwkgdb!';
            const shift = 3;
            const encode = false;
            const expected = 'happy birthday!';
            const actual = caesar(input, shift, encode);
            expect(actual).to.equal(expected);
        })
        it('should ignore capital letters', () => {
            const input = 'KDSSB';
            const shift = 3;
            const encode = false;
            const expected = 'happy';
            const actual = caesar(input, shift, encode);
            expect(actual).to.equal(expected);
        })
        it('should appropriately handle letters at the end of the alphabet', () => {
            const input = 'cheud chssholqv';
            const shift = 3;
            const encode = false;
            const expected = 'zebra zeppelins';
            const actual = caesar(input, shift, encode);
            expect(actual).to.equal(expected);
        })
        it('should allow for a negative shift that will shift to the left', () => {
            const input = 'wbyox wbmmbifkp';
            const shift = -3;
            const encode = false;
            const expected = 'zebra zeppelins';
            const actual = caesar(input, shift, encode);
            expect(actual).to.equal(expected);
        })
    })
})