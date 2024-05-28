const filterItems = require("../src/service/filter/filter");
const { data } = require("../src/mockedData/data")

describe("filterItem function", () => {
    it("filter all items and retrieve those with the value 'ry'", () => {
        const command = [{ action: '--filter', value: 'ry' }];
        const result = filterItems(command, data);

        expect(result).toEqual([
            { name: "Uzuzozne", people: [{ animals: [{ name: "John Dory" }], name: "Lillie Abbott" }] },
            { name: "Satanwi", people: [{ animals: [{ name: "Oryx" }], name: "Anthony Bruno" }] }
        ]);
    });
})