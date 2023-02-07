import { AnyAction } from "redux";
import { Category } from "./category.types";
import {
  fetchCategoryStart,
  fetchCategorySuccess,
  fetchCategoryFailed,
} from "./category.action";

export type CategoryState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

// we used a discrimatory union to state what the action type must be
export const categoryReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): CategoryState => {
  if (fetchCategoryStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (fetchCategorySuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      categories: action.payload,
    };
  }
  if (fetchCategoryFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
};
