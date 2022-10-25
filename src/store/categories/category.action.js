import CATEGORY_ACTION_TYPES from "./category.types";

import { createAction } from "../../utils/reducers/reducers.utils";

export const setCategories = (categories) => {
  return createAction(CATEGORY_ACTION_TYPES.SET_CURRENT_CATEGORY, categories);
};
