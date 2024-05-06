const { z } = require("zod");
const chatSchema = z.object({
  prompt: z.string().min(1,"message cannot be empty"),
});

module.exports=chatSchema;
