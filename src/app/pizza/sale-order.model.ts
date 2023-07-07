export interface SaleOrder {
    client: string,
    address: string,
    phone: string,
    size: string,
    ingredients: string[],
    quantity: number,
    date?: Date,
    total?: number
}