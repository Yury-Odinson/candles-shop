import {Candle} from "./types";

export const itemsInCart: Candle[] = JSON.parse(sessionStorage.getItem("candles") || "[]") || [];

export function addToCart(item: Candle) {
    itemsInCart.push(item);
    sessionStorage.setItem("candles", JSON.stringify([...itemsInCart]));
}

export function getCartItems() {
    return JSON.parse(sessionStorage.getItem("candles") || "[]") || [];
}
