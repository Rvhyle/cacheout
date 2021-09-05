import axios from 'axios';
import './homepage_styles.scss';
import React, { useEffect, useMemo, useState } from 'react';
import { Loading } from '../../Components/components';

interface IProductObject {
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  category: string | undefined;
  description: string | undefined;
  image: string | undefined;
}

interface IFilteredProducts {
  dealFilter: IProductObject[];
  techFilter: IProductObject[];
  jeweleryFilter: IProductObject[];
}

const Home: React.FC = () => {
  let [products, setProducts] = useState<IProductObject[]>([]);
  let [fetching, setFetching] = useState<Boolean>(true);
  let ProductsContext = React.createContext<IProductObject[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        let results = await axios.get(
          'https://fakestoreapi.com/products?limit=20'
        );

        setProducts(results.data);
        setFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setFetching]);

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
        if (item?.price) {
          return item.category === 'electronics';
        }
        return null;
      })
      .splice(0, 5);

    // Jewelery
    let filteredJewelery: IProductObject[] = products
      ?.filter((item: IProductObject) => {
        if (item?.price) {
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

  /**
   * Since array of products will always be the same products && same order
   * useMemo will cache the filtered products to prevent filterData() from running on every render
   * Will only call filterData() when the state of products changes
   */
  const filteredDeals: IFilteredProducts = useMemo(
    () => filterData(products),
    [products]
  );

  if (fetching) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <ProductsContext.Provider value={products}>
      <div className='home-container mx-auto'>
        <div className='featured'>
          {products?.slice(0, 3).map((product, index) => {
            return (
              <div
                key={product?.id}
                className={`grid-item feat-item feat-${index}`}
              >
                <a href='/'>
                  <img
                    className='product-image'
                    src={product?.image}
                    alt={product?.title}
                  />
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
          <div className='category-link'>
            <a href='/'>Tech Wonderland</a>
          </div>
          <div className='category-link'>
            <a href='/'>Mens Clothing</a>
          </div>
          <div className='category-link'>
            <a href='/'>Womens Clothing</a>
          </div>
        </div>
        {/* Deals */}
        <div className='homepage_showcase-container'>
          <h1 className='showcase-title'>Deals Under $30</h1>
          <div className='showcase d-flex justify-content-center gap-5 flex-wrap'>
            {filteredDeals.dealFilter.map((product) => {
              return (
                <div key={product?.id} className='showcase-items'>
                  <a href='/'>
                    <img
                      className='product-image'
                      src={product?.image}
                      alt={product?.title}
                    />
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
                    <img
                      className='product-image'
                      src={product?.image}
                      alt={product?.title}
                    />
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
                    <img
                      className='product-image'
                      src={product?.image}
                      alt={product?.title}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ProductsContext.Provider>
  );
};

export default Home;
