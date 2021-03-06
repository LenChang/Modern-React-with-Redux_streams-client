import { SIGN_INT, SIGN_OUT } from "../actions/types";

const INTIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_INT:
      return { ...state, isSignedIn: true, userId: action.payload.userId };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
