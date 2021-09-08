import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { IProductObject } from '../Models/Interfaces';
import { Loading } from './components';

/**
 * Component takes in path prop that tells which category to render
 * @returns All products of Category
 */

const RenderCategory: React.FunctionComponent<{
  path: string;
}> = ({ path }): any => {
  let [productsInCategory, setProductsInCategory] = useState<IProductObject[]>(
    []
  );
  let [fetching, setFetching] = useState<Boolean>(true);

  useEffect(() => {
    let fetchProductsInCategory = async (): Promise<void> => {
      try {
        let results = await axios.get(
          `https://fakestoreapi.com/products/category/${path}`
        );
        setProductsInCategory(results.data);
        setFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductsInCategory();
  }, [setProductsInCategory, path]);

  if (fetching) {
    return (
      <React.Fragment>
        <Loading />
      </React.Fragment>
    );
  }

  return (
    <div>
      {productsInCategory?.map((products: IProductObject) => {
        return <div>{products.title}</div>;
      })}
    </div>
  );
};

export default RenderCategory;
