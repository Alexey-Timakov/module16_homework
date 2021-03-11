const revFunc = require("../task_10.4.3.js")

test("String check", () => {
    expect(revFunc.reverseStringFunc("ABCDEFG")).toBe("GFEDCBA");
});