import { SIGN_INT, SIGN_OUT } from "./types";

export const signIn = (userId) => {
  return { type: SIGN_INT, payload: { userId } };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};
