import { runCode } from "./exercise";

describe("tests", () => {
  it("should throw an error", async () => {
    const rta = await runCode()
    expect(rta).rejects.toThrowError(new Error("API Not Found"));
  });
});
