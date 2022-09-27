import { runCode } from "./exercise";

describe("tests", () => {
  it("should throw a error", () => {
    expect(() => runCode()).rejects.toThrowError(new Error("API Not Found"));
  });
});
