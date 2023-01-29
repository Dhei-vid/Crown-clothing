import { CATEGORY_ACTION_TYPES, Category } from "./category.types";
import { categoryAction } from "./category.action";

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
  action = {} as categoryAction
) => {
  switch (action.type) {
    case CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    case CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
