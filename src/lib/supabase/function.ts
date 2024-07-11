import { supabase } from "./supabase";

export async function checkValidUser(email: string) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (data) {
    return { status: true, data };
  } else {
    return { status: false, data: {} };
  }
}

export async function registerUser(data: {
  email: string;
  name: string;
  image: string;
}) {
  const data_user = { ...data, country: "" };
  const { status, error, statusText } = await supabase
    .from("users")
    .insert(data_user);

  if (status === 201) {
    return { status: true, message: "User registered successfully" };
  } else {
    return { status: false, message: "Failed to register user" };
  }
}

export async function getSavedList(email: string | null | undefined) {
  const { data, error } = await supabase
    .from("users")
    .select(`id, lists:saved_list (*)`)
    .eq("email", email)
    .single();

  if (error) return { id: "", lists: [] };

  return data as { id: string; lists: Array<SavedList> };
}

export async function getFavorite(id: string, filter: "tv" | "movie" | "all") {
  if (filter !== "all" && filter !== "tv" && filter !== "movie") return [];

  if (filter === "all") {
    console.log("here");
    const { data, error } = await supabase
      .from("saved_list")
      .select(`*`)
      .eq("user_id", id);

    if (error) return [];

    return data as Array<SavedList>;
  } else if (filter === "movie") {
    const { data, error } = await supabase
      .from("saved_list")
      .select(`*`)
      .eq("user_id", id)
      .eq("type", "movie");

    if (error) return [];

    return data as Array<SavedList>;
  } else if (filter === "tv") {
    const { data, error } = await supabase
      .from("saved_list")
      .select(`*`)
      .eq("user_id", id)
      .eq("type", "tv");

    if (error) return [];

    return data as Array<SavedList>;
  }

  return [];
}
