import User from "../src/modules/user/user.model";

describe("User Model", () => {
  it("should hash password before saving", async () => {
    const user = new User({ name: "Ram", email: "ram@example.com", password: "123456", role: "user" });
    await user.save();

    expect(user.password).not.toBe("123456"); // password should be hashed
  });

  it("should compare password correctly", async () => {
    const user = new User({ name: "Ram", email: "ram2@example.com", password: "abcdef", role: "user" });
    await user.save();

    const isMatch = await user.comparePassword("abcdef");
    expect(isMatch).toBe(true);
  });
});
