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

export type CatState = {
  products: IProductObject[];
  fetching: Boolean;
};
