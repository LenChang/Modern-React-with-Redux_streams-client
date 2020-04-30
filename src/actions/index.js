import { SIGN_INT, SIGN_OUT } from "./types";

export const signIn = () => {
  return { type: SIGN_INT };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};
