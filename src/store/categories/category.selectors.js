import { createSelector } from "reselect";

// To extend into selectors, we have to create input selectors and output selectors.
const selectCategoryReducer = (state) => state.category;

// createSelector create a memoized selector (takes 2 arg)
// the only time this will be rerun is if the input value (category object - line 5) is different
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoryMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log("memoized", categories);
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
