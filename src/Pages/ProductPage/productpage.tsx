import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { IProductObject } from '../../Models/Interfaces';
import { routeParamTypes } from '../../Models/Interfaces';
import { Loading } from '../../Components/components';

const ProductPage: React.FunctionComponent = (): JSX.Element => {
  const { allProducts, loadingData } = useSelector((state: RootState) => state.products);
  let { id } = useParams<routeParamTypes>();

  //Match param id with product id's for selectedProduct
  const filterProducts = (): IProductObject => {
    let filteredProductArray = allProducts.filter((products: IProductObject) => {
      if (products.id === Number(id)) {
        return products;
      }
    });

    return filteredProductArray[0];
  };

  //IProductObject returned from filterProducts();
  const selectedProduct = filterProducts();

  if (loadingData) {
    return <Loading />;
  }

  return (
    <div>
      <h1>{selectedProduct?.title}</h1>
    </div>
  );
};

export default ProductPage;
