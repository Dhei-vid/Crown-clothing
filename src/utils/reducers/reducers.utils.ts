// An interface that extends the Action
import { AnyAction } from "redux";

/*why I am having two action types other than making the payload optional is because making the payload optional
 means that the payload would either point to a payload or undefined. In JS having an undefined parameter is true
 and we do not want that
*/

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// In createAction to specify if what we get comes with a payload or not so I can determine the type,
// I do something called function overloading. Function overloading helps to set the type of multiple parameters types depending on the parameters given.

// Export all overload definitions
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return {
    type: type,
    payload: payload,
  };
}
