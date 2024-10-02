import {axiosInstance} from "./instance";
import {Cart} from "./types";

export const fetchCart = async (): Promise<Cart> => {
    return (await axiosInstance.get("/cart")).data;
};
