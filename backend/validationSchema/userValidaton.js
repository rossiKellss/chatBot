const { z } = require("zod");
const signUpSchema = z.object({
  userName: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "username must be at least 3 characters" })
    .trim(),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is required" })
    .min(3, { message: "username must be at least 3 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(3, { message: "username must be at least 3 characters" }),
});

module.exports = signUpSchema;
