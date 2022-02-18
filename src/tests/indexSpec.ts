import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test endpoint responses", () => {
  it("gets endpoint", async () => {
    const response = await request.get("/api/image");
    expect(response.status).toBe(200);
  });
});
