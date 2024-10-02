export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
    categoryId: number;
    createdAt: Date;
    updateAt: Date;
}

export interface ItemsCart {
    id: number;
    cartId: number;
    productId: number;
    quantity: number;
    createdAt: Date;
    updateAt: Date;
    product: Product;
}

export interface Cart {
    id: number;
    userId?: number;
    token: string;
    totalAmount: number;
    createdAt: Date;
    updateAt: Date;
    items: ItemsCart[];
}
