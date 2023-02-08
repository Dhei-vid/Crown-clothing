export enum CART_ACTION_TYPES {
  SET_CURRENT_TOTAL = "cart/SET_CURRENT_TOTAL",
  SET_CURRENT_COUNT = "cart/SET_CURRENT_COUNT",
  SET_CART_STATUS = "cart/SET_CART_STATUS",
  SET_CART_ITEM = "cart/SET_CART_ITEM",
}

export type CartItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
};
