import {ItemsCart} from "../../services/types";

export const calcCartItemTotalPrice = (item: ItemsCart): number => {
    return item.product.price * item.quantity;
};
