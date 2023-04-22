import { INCREMENT, DECREMENT, INCREMENT_BY_VALUE } from "./types";

const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case INCREMENT_BY_VALUE:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export default reducer;
