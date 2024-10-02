import { create } from "zustand";
import { Api } from "../../services/api-client";
import { CartStateItem, getCartItemsDetails } from "@/lib/get-cart-details";

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];

    // Получение товаров из корзины
    fetchCartItem: () => Promise<void>;
    // Запрос на обновление кол-ва
    updateItemQuantity: (id: number, quantity: number) => Promise<void>;
    addCartItem: (values: any) => Promise<void>;
    removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,

    fetchCartItem: async () => {
        try {
            set({ loading: true, error: false });
            const data = await Api.cart.fetchCart();
            set(getCartItemsDetails(data));
            console.log(data);
        } catch (error) {
            console.log(error);
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    removeCartItem: async (id: number) => {
    },
    updateItemQuantity: async (id: number, quantity: number) => {
    },
    addCartItem: async (values: any) => {
    }

}));
