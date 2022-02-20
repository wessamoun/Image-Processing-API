import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test index endpoint responses", () => {
  it("gets index endpoint", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});
