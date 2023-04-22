import { INCREMENT, DECREMENT, INCREMENT_BY_VALUE } from "./types";

export const increment = () => ({ type: INCREMENT });

export const decrement = () => ({ type: DECREMENT });

export const incrementByValue = (value) => ({
  type: INCREMENT_BY_VALUE,
  payload: value,
});
