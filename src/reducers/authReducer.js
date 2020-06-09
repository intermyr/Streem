import { SIGN_OUT, SIGN_IN } from "../actions/types";

const INITIAL_STATE = {
  isSingedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSingedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSingedIn: false, userId: null };
    default:
      return state;
  }
};
