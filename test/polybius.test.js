// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe('polybius()', () =>{
    describe('encoding a message', () => {
        it('should encode a message by translating each letter to number pairs', () => {
            const input = 'happy';
            const encode = true;
            const expected = '3211535345';
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        })
        it('should translate 42 to both "i" and "j"', () => {
            const input = 'julius caesar';
            const encode = true;
            const expected = '425413425434 311151341124';
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        })
        it('should leave spaces as is', () => {
            const input = 'happy birthday';
            const encode = true;
            const expected = '3211535345 2142244432411145';
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        })
    })

    describe('decoding a message', () => {
        it('should decode a message by translating each letter to number pairs', () => {
            const input = '3211535345';
            const encode = false;
            const expected = 'happy';
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        })
        it('should translate 42 to both "i" and "j"', () => {
            const input = '425413425434 311151341124';
            const encode = false;
            const expected = '(i/j)ul(i/j)us caesar';
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        })
        it('should leave spaces as is', () => {
            const input = '3211535345 2142244432411145';
            const encode = false;
            const expected = 'happy b(i/j)rthday';
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        })
        it('should return false if the length of all numbers is odd', () => {
            const input = '3211535345 21422444324111451';
            const encode = false;
            const expected = false;
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        })
    })
})