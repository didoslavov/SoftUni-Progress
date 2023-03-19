const { expect } = require('chai');
const { rgbToHexColor } = require('./06rgbToHex');

describe('rgbToHexColor function tests', () => {
    it('Should return #000000 with rgbToHexColor(0, 0, 0)', () => {
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000');
    });
    it('Should return #FFFFFF with rgbToHexColor(255, 255, 255)', () => {
        expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF');
    });
    it('Should return #D6187D with rgbToHexColor(214, 24, 125)', () => {
        expect(rgbToHexColor(214,24,125)).to.be.equal('#D6187D');
    });
    it('Should return undefined with rgbToHexColor(-1, 0, 0)', () => {
        expect(rgbToHexColor(-1,0,0)).to.be.undefined;
    });
    it('Should return undefined with rgbToHexColor(256, 0, 0)', () => {
        expect(rgbToHexColor(256,0,0)).to.be.undefined;
    });
    it('Should return undefined with rgbToHexColor(1.5, 0, 0)', () => {
        expect(rgbToHexColor(1.5,0,0)).to.be.undefined;
    });
    it('Should return undefined with rgbToHexColor(0, -1, 0)', () => {
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
    });
    it('Should return undefined with rgbToHexColor(0, 256, 0)', () => {
        expect(rgbToHexColor(0,256,0)).to.be.undefined;
    });
    it('Should return undefined with rgbToHexColor(0, 1.5, 0)', () => {
        expect(rgbToHexColor(0,1.5,0)).to.be.undefined;
    });
    it('Should return undefined with rgbToHexColor(0, 0, -1)', () => {
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
    });
    it('Should return undefined with rgbToHexColor(0, 0, 256)', () => {
        expect(rgbToHexColor(0,0,256)).to.be.undefined;
    });
    it('Should return undefined with rgbToHexColor(0, 0, 1.5)', () => {
        expect(rgbToHexColor(0,0,1.5)).to.be.undefined;
    });
    it('Should return #010101 with rgbToHexColor(1, 1, 1)', () => {
        expect(rgbToHexColor(1,1,1)).to.be.equal('#010101');
    });
})