import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProductObject } from '../../Models/Interfaces';
import { fetchProducts } from '../../Redux/features/allProducts/productSlice';
import { RootState } from '../../Redux/store';
import { Loading } from '../components';
import './categoryrender_styles.scss';

/**
 * Component takes in path prop that tells which category to render
 * @returns All products of Category
 */

const RenderCategory: React.FunctionComponent<{
  category: string;
}> = ({ category }): JSX.Element => {
  const { allProducts, loadingData } = useSelector((state: RootState) => state.products);

  if (loadingData) {
    return <Loading />;
  }

  return (
    <div className='category-container d-flex mx-auto flex-sm-column gap-4'>
      {allProducts
        ?.filter((item: IProductObject) => {
          return item.category === category;
        })
        .map((product: IProductObject) => {
          return (
            <div
              className='product d-flex align-items-center justify-content-evenly flex-wrap'
              key={product.id}
            >
              <div className='img-container'>
                <img className='product-img' src={product.image} alt={product.title} />
              </div>
              <div className='product-content'>
                <h1 className='product-title'>{product.title}</h1>
                <span className='product-rating'>{product.rating.rate} / 10</span>
                <p className='product-description'>{product.description}</p>
                <h2 className='product-price'>${product.price}</h2>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RenderCategory;
