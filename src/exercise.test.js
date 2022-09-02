import { runCode } from "./exercise";


describe("tests", () => {
  it("should return Throw a error", async () => {
    expect(() => runCode()).rejects.toThrowError(new Error("API Not Found"));
  });
});
