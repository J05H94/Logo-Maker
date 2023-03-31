// const { describe } = require('yargs') // added itself after autocompleating describe; the code still works without it
const shapes = require('./shapes')

describe("Genorates a shape from string", () => {
    // function no longer returns true
    // it("Should return true", () => {
    //     const actual = shapes("circle")
    //     const expected = true;
    //     expect(expected).toEqual(actual)
    // })

    it("Should return false", () => {
        const actual = shapes("not_circle")
        const expected = false;
        expect(expected).toEqual(actual)
    })

    it("Should return a simple triangle logo", () => {
        const actual = shapes('triangle', 'yellow', 'text', 'red')
        const expected = `<svg id="triangle" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points = "100 30, 200 200, 0 200" x="150" y="125" fill="yellow" />
        <text x="33%" y="77%" font-size="60" text-anchor="middle" fill="red">text</text>
        </svg>`;
        expect(expected).toEqual(actual)
    })

    it("Should return a simple square logo", () => {
        const actual = shapes('square', 'green', 'text', 'blue')
        const expected = `<svg id="square" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="50" y="20" width="150" height="150" fill="green" />
        <text x="40%" y="50%" font-size="60" text-anchor="middle" fill="blue">text</text>
        </svg>`;
        expect(expected).toEqual(actual)
    })

    it("Should return a simple circle logo", () => {
        const actual = shapes('circle', 'orange', 'text', 'purple')
        const expected = `<svg id="circle" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="orange" />
        <text x="50%" y="50%" font-size="60" text-anchor="middle" fill="purple">text</text>
        </svg>`;
        expect(expected).toEqual(actual)
    })
})