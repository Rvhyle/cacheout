export interface IProductObject {
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  category: string | undefined;
  description: string | undefined;
  image: string | undefined;
}

export interface IFilteredProducts {
  dealFilter: IProductObject[];
  techFilter: IProductObject[];
  jeweleryFilter: IProductObject[];
}

export enum Category {
  Men = "men's%20clothing",
  Women = "women's%20clothing",
  Jewelery = 'jewelery',
  Electronics = 'electronics',
}
