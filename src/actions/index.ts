import { defineAction, z } from "astro:actions";

export const server = {
  newsletter: defineAction({
    accept: "json",
    input: z.object({
      email: z.string().email(),
      receivePromo: z.boolean(),
    }),
    handler: async ({ email, receivePromo }) => {
      // call a mailing service, or store to a database
      return { success: true };
    },
  }),
};
