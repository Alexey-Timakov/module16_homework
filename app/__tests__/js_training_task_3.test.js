import { calculateY } from "../js_training_task_3";

describe("Checking how does Calculate Function behave", () =>{
    it("Check number 10", () => {
        const xVal = 10;
        const result = calculateY(xVal);
        expect(result).toBeCloseTo(12.5344, 4);
    }),
    it("Check for string value", () => {
        const strVal = "any string";
        const result = calculateY(strVal);
        expect(result).toBeNaN();
    }),
    it("Check for null value", () => {
        const strNull = null;
        const result = calculateY(strNull);
        expect(result).toBe(Infinity);
    }),
    it("Check for empty string value", () => {
        const emptyStr = "";
        const result = calculateY(emptyStr);
        expect(result).toBe(Infinity);
    })
});