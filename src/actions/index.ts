import { supabase } from "@/lib/supabase/supabase";
import { defineAction, z } from "astro:actions";
import { getSession } from "auth-astro/server";

export const server = {
  updateUser: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      country: z.string(),
    }),
    handler: async ({ name, email, country }) => {
      // call a mailing service, or store to a database

      const { error, data } = await supabase
        .from("users")
        .update({ email, country, name })
        .eq("email", email)
        .select();

      if (error) {
        return { success: false, data: [] };
      }

      return { success: true, data };
    },
  }),
  addFavorite: defineAction({
    accept: "json",
    input: z.object({
      title: z.string(),
      poster: z.string(),
      list_id: z.number(),
      release_list: z.date().or(z.string()),
      user_id: z.string(),
      type: z.string(),
    }),
    async handler(
      { list_id, poster, release_list, title, type, user_id },
      context
    ) {
      const session = await getSession(context.request);

      if (session) {
        const { data, error } = await supabase
          .from("saved_list")
          .insert({ list_id, poster, release_list, title, type, user_id })
          .select();

        if (error) {
          return {
            success: false,
            data: [],
            message: "Server error please try again",
          };
        }

        return { success: true, data, message: "Get all data successfully" };
      }

      return { success: false, message: "Please login firts", data: [] };
    },
  }),
  deleteFavorite: defineAction({
    accept: "json",
    input: z.object({
      id: z.string(),
    }),
    async handler({ id }) {
      const { error } = await supabase.from("saved_list").delete().eq("id", id);

      if (error) return { success: false };
      return { success: true };
    },
  }),
  addComment: defineAction({
    accept: "json",
    input: z.object({
      comment: z.string().min(10, {
        message: "Comment must be at least 10 characters long",
      }),
      image: z.object({
        url: z.string().url(),
        path: z.string(),
      }),
    }),
    async handler(input, context) {
      return { success: true };
    },
  }),
};
