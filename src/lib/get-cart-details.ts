import {Cart, ItemsCart} from "../../services/types";
import {calcCartItemTotalPrice} from "@/lib/calc-cart-item-total-price";

export interface CartStateItem {
    id: number;
    quantity: number;
    name: string;
    imageUrl: string;
    price: number;
}


export const getCartItemsDetails = (data: Cart) => {

    const items = data.items.map((item: ItemsCart) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.product.name,
        imageUrl: item.product.imageUrl,
        price: calcCartItemTotalPrice(item)
    }));

    return {
        items,
        totalAmount: data.totalAmount,
    }
};
