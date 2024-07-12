import { defineMiddleware } from "astro:middleware";
import { getSession } from "auth-astro/server";
import { checkValidUser } from "./lib/supabase/function";

const protectedRouteBeforeAuth = ["/favorite"];
const protectedRouteAfterAuth = ["/signin"];

export const onRequest = defineMiddleware(
  async ({ url, redirect, locals, request }, next) => {
    const session = await getSession(request);

    if (session) {
      const { data, status } = await checkValidUser(
        session.user?.email as string
      );

      if (status) {
        locals.user = data;
      }

      if (protectedRouteAfterAuth.includes(url.pathname)) {
        return redirect("/");
      }
    } else {
      if (protectedRouteBeforeAuth.includes(url.pathname)) {
        return redirect("/");
      }
    }

    return next();
  }
);
