export const selectCategoryMap = (state) => {
  // return state.category.categories;
  console.log("selector fired");

  const categoriesMap = state.category.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoriesMap;
};
