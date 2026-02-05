export interface Prodact{
    id: string;
    urlImage: string;
    rute: number;
    discount: number;
    price: number;
}
export interface ListDataProps{
    data: Prodact[];
    setCount: React.Dispatch<React.SetStateAction<[]>>
}
