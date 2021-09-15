import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage_styles.scss';
import { Loading } from '../../Components/components';
import { IFilteredProducts, IProductObject } from '../../Models/Interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

const Home: React.FunctionComponent = (): JSX.Element => {
  const { allProducts, loadingData } = useSelector((state: RootState) => state.products);

  /**
   * @function filterData goes through array of products && filters products
   * @param products takes in Array of objects with IProductObject interface
   * @returns null | Object containing properties with IProductObject[]
   */
  const filterData = (products: IProductObject[]): IFilteredProducts => {
    // Deals under 30
    let filteredDeals: IProductObject[] = products
      ?.filter((item: IProductObject) => {
        if (item?.price) {
          return item.price <= 30.0;
        }
        return null;
      })
      .splice(0, 5);

    // Tech
    let filteredTech: IProductObject[] = products
      ?.filter((item: IProductObject) => {
        if (item?.category) {
          return item.category === 'electronics';
        }
        return null;
      })
      .splice(0, 5);

    // Jewelery
    let filteredJewelery: IProductObject[] = products
      ?.filter((item: IProductObject) => {
        if (item?.category) {
          return item.category === 'jewelery';
        }
        return null;
      })
      .splice(0, 5);

    // Return Object with IFilteredProducts interface
    return {
      dealFilter: filteredDeals,
      techFilter: filteredTech,
      jeweleryFilter: filteredJewelery,
    };
  };

  const filteredDeals: IFilteredProducts = filterData(allProducts);

  if (loadingData) {
    return <Loading />;
  }

  return (
    <div className='home-container mx-auto'>
      <div className='featured'>
        {allProducts?.slice(0, 3).map((product: IProductObject, index: number) => {
          return (
            <div key={product?.id} className={`grid-item feat-item feat-${index}`}>
              <a href='/'>
                <img className='product-image' src={product?.image} alt={product?.title} />
                <div className='product-info pb-3 ps-3'>
                  <h1>{product?.title}</h1>
                  <h2>${product?.price}</h2>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      {/* Links To 3 categories */}
      <div className='link-container my-5 d-flex gap-4 justify-content-evenly flex-wrap align-items-center'>
        <Link className='category-link' to='/category/tech'>
          Tech Wonderland
        </Link>
        <Link className='category-link' to='/category/mens'>
          Men's Clothing
        </Link>
        <Link className='category-link' to='/category/womens'>
          Women's Clothing
        </Link>
      </div>
      {/* Deals */}
      <div className='homepage_showcase-container'>
        <h1 className='showcase-title'>Deals Under $30</h1>
        <div className='showcase d-flex justify-content-center gap-5 flex-wrap'>
          {filteredDeals.dealFilter.map((product) => {
            return (
              <div key={product?.id} className='showcase-items'>
                <a href='/'>
                  <img className='product-image' src={product?.image} alt={product?.title} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {/* Tech */}
      <div className='homepage_showcase-container'>
        <h1 className='showcase-title'>Gear up for School</h1>
        <div className='showcase d-flex justify-content-center gap-5 flex-wrap'>
          {filteredDeals.techFilter.map((product) => {
            return (
              <div key={product?.id} className='showcase-items'>
                <a href='/'>
                  <img className='product-image' src={product?.image} alt={product?.title} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {/* Jewelery */}
      <div className='homepage_showcase-container'>
        <h1 className='showcase-title'>Here's one way to apologize</h1>
        <div className='showcase d-flex justify-content-center gap-5 flex-wrap'>
          {filteredDeals.jeweleryFilter.map((product) => {
            return (
              <div key={product?.id} className='showcase-items'>
                <a href='/'>
                  <img className='product-image' src={product?.image} alt={product?.title} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
