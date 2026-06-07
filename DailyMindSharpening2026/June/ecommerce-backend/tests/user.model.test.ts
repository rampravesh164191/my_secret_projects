import mongoose from "mongoose";
import User from "../src/modules/user/user.model";

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce_test");
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("User Model", () => {
  it("should hash password before saving", async () => {
    const user = new User({
      name: "Ram",
      email: "ram@example.com",
      password: "123456",
      role: "user",
    });
    await user.save();

    expect(user.password).not.toBe("123456");
  });

  it("should compare password correctly", async () => {
    const user = new User({
      name: "Ram",
      email: "ram2@example.com",
      password: "abcdef",
      role: "user",
    });
    await user.save();

    const isMatch = await user.comparePassword("abcdef");
    expect(isMatch).toBe(true);
  });
});
