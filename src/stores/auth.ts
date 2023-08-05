import { writable } from "svelte/store";
import { type User } from "firebase/auth";

export const auth = writable<User | null>(null);
