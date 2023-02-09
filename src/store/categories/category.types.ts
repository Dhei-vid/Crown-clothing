// ENUM WORKS IN TYPESCRIPT FOR FIXED STRINGS
export enum CATEGORY_ACTION_TYPES {
  FETCH_CURRENT_CATEGORY_START = "category/SET_CURRENT_CATEGORY_START",
  FETCH_CURRENT_CATEGORY_SUCCESS = "category/SET_CURRENT_CATEGORY_SUCCESS",
  FETCH_CURRENT_CATEGORY_FAILED = "category/SET_CURRENT_CATEGORY_FAIL",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};
