function extendPrototype(c) {
    c.prototype.species = 'Human';

    c.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
