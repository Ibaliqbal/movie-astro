import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { getSavedList } from "@/lib/supabase/function";

export const GET: APIRoute = async ({ request }) => {
  const session = await getSession(request);

  if (session) {
    const savedList = await getSavedList(session.user?.email);
    return new Response(
      JSON.stringify({
        status: true,
        data: savedList.lists,
        message: "Get saved list successfully",
      }),
      {
        status: 200,
        statusText: "OK",
      }
    );
  }

  return new Response(
    JSON.stringify({ message: "Please login first", status: false, data: [] }),
    {
      status: 401,
      statusText: "Unauthorized",
    }
  );
};
