import { runCode } from "./exercise";

describe("tests", () => {
  it("should return Throw a error", async () => {
    expect(async () => await runCode()).toThrow(new Error("API No Found"));
  });
});
