import { CATEGORY_ACTION_TYPES, Category } from "./category.types";

import {
  createAction,
  Action,
  ActionWithPayload,
} from "../../utils/reducers/reducers.utils";

export type FetchCategoryStart =
  Action<CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START>;

export type FetchCategorySuccess = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_SUCCESS,
  Category[]
>;

export type FetchCategoryFailed = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_FAILED,
  Error
>;

export type categoryAction =
  | FetchCategoryStart
  | FetchCategorySuccess
  | FetchCategoryFailed;

export const fetchCategoryStart = (): FetchCategoryStart => {
  return createAction(CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START);
};

export const fetchCategorySuccess = (
  categories: Category[]
): FetchCategorySuccess => {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_SUCCESS,
    categories
  );
};

export const fetchCategoryFailed = (error: Error): FetchCategoryFailed => {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_FAILED,
    error
  );
};
