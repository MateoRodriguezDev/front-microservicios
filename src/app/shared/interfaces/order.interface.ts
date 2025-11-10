export interface IOrder  {
    _id?: string,
    userId?: number,
    productId?: number,
    quantity: number,
    totalPrice: number,
    createdAt?: Date
}