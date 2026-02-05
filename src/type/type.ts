export interface Prodact{
    id: string;
    urlImage: string;
    rute: number;
    discount: number;
    price: number;
}
export interface ListDataProps{
    data: Prodact[];
}

export  interface Btn{
    onAddProdect(): void
}