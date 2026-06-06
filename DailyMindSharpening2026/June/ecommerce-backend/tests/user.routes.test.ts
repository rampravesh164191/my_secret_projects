import request from "supertest";
import app from "../src/app";
import mongoose from "mongoose";

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce_test");
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("User Routes", () => {
  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send({ name: "Ram", email: "ram@example.com", password: "123456", role: "user" });

    expect(res.status).toBe(201);
    expect(res.body.message).toBe("User registered successfully");
  });

  it("should login a user", async () => {
    await request(app)
      .post("/api/users/register")
      .send({ name: "Ram", email: "ramlogin@example.com", password: "123456", role: "user" });

    const res = await request(app)
      .post("/api/users/login")
      .send({ email: "ramlogin@example.com", password: "123456" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("accessToken");
    expect(res.body).toHaveProperty("refreshToken");
  });
});
