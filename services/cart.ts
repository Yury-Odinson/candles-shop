import {axiosInstance} from "./instance";
import {Cart} from "./types";

export const getCart = async (): Promise<Cart> => {
    return (await axiosInstance.get("/cart")).data;
};

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<Cart> => {
    return (await axiosInstance.patch<Cart>("/cart/" + itemId, {quantity})).data;
};

