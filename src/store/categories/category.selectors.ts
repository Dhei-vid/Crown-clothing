import { createSelector } from "reselect";
import { CategoryState } from "./category.reducer";
import { CategoryMap } from "./category.types";

// To extend into selectors, we have to create input selectors and output selectors.
const selectCategoryReducer = (state): CategoryState => state.category;

// createSelector create a memoized selector (takes 2 arg - input selector and output selector)
// the only time this will be rerun is if the input value (category object) is different
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoryMap = createSelector(
  [selectCategories],

  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesisLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
