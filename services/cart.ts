import {axiosInstance} from "./instance";
import {Cart, CreateCartItemValues} from "./types";

export const getCart = async (): Promise<Cart> => {
    return (await axiosInstance.get("/cart")).data;
};

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<Cart> => {
    return (await axiosInstance.patch<Cart>("/cart/" + itemId, {quantity})).data;
};

export const removeCartItem = async (id: number): Promise<Cart> => {
    return (await axiosInstance.delete<Cart>("/cart/" + id)).data;
};

export const addCartItem = async (values: CreateCartItemValues): Promise<Cart> => {
    return (await axiosInstance.delete<Cart>("/cart/" + values)).data;
};
