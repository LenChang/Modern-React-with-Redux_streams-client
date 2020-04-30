import { SIGN_INT, SIGN_OUT } from "../actions/types";

const INTIAL_STATE = {
  isSignedIn: null,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_INT:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
