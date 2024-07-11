import { atom } from "nanostores";
export const user = atom<User | null>(null);

export function storedUser(data: User) {
  user.set(data);
}
