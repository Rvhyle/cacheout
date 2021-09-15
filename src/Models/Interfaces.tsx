export interface IProductObject {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IFilteredProducts {
  dealFilter: IProductObject[];
  techFilter: IProductObject[];
  jeweleryFilter: IProductObject[];
}

export enum Category {
  Men = "men's clothing",
  Women = "women's clothing",
  Jewelery = 'jewelery',
  Electronics = 'electronics',
}

export interface IProductStoreState {
  allProducts: IProductObject[];
  mensProducts: IProductObject[];
  womensProducts: IProductObject[];
  techProducts: IProductObject[];
  jeweleryProducts: IProductObject[];
  loadingData: Boolean;
}
