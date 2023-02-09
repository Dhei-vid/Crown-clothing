import { Category } from "../categories/category.types";

export enum CART_ACTION_TYPES {
  SET_CURRENT_TOTAL = "cart/SET_CURRENT_TOTAL",
  SET_CURRENT_COUNT = "cart/SET_CURRENT_COUNT",
  SET_CART_STATUS = "cart/SET_CART_STATUS",
  SET_CART_ITEM = "cart/SET_CART_ITEM",
}

export type CartItem = Category & {
  id: number;
  quantity: number;
  price: number;
};
