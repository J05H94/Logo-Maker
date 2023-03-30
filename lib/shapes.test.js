// const { describe } = require('yargs') // added itself after autocompleating describe; the code still works without it
const shapes = require('./shapes')

describe("Genorates a shape from string", () => {
    it("Should return true", () => {
        const actual = shapes("circle")
        const expected = true;
        expect(expected).toEqual(actual)
    })

    it("Should return false", () => {
        const actual = shapes("not_circle")
        const expected = false;
        expect(expected).toEqual(actual)
    })
})