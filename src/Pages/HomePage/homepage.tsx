
import axios from 'axios';
import './homepage_styles.scss';
import React, { useEffect, useMemo, useState } from 'react';

interface IProductObject {
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  category: string | undefined;
  description: string | undefined;
  image: string | undefined;
}

const Home: React.FC = () => {
  let [products, setProducts] = useState<IProductObject[]>([]);
  let ProductsContext = React.createContext<IProductObject[]>(
    []
  );

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        let results = await axios.get(
          'https://fakestoreapi.com/products?limit=20'
        );

        setProducts(results.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setProducts]);

  /**
   * @function filterData goes through array of products adn filters products with prices < 30.00
   * @param products takes in Array of objects with IProductObject interface
   * @returns null | filtered array of products with prices < 30.00
   */
  const filterData = (products : IProductObject[]): IProductObject[] => {
    return products
      ?.filter((item: IProductObject) => {
        if (item?.price) {
          return item.price <= 30.0;
        }
        return null;
      })
      .splice(0, 5);
  };

  /**
   * Since array of products will always be the same products && same order
   * useMemo will cache the filtered products to prevent filterData() from running on every render
   * Will only call filterData() when the state of products changes
   */
  const filteredDeals: IProductObject[] = useMemo(
    () => filterData(products),
    [products]
  );

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
        <div className='deals-container'>
          <h1 id='deals-title'>Deals Under $30</h1>
          <div className='deals d-flex justify-content-center gap-5 flex-wrap'>
            {filteredDeals.map((product) => {
              return (
                <div key={product?.id} className='deal-items'>
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
