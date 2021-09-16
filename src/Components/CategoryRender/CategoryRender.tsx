import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IProductObject } from '../../Models/Interfaces';
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
                <Link to={`/category/${product.category}/${product.id}`}>
                  <img className='product-img' src={product.image} alt={product.title} />
                </Link>
              </div>
              <div className='product-content'>
                <Link to={`/category/${product.category}/${product.id}`}>
                  <h1 className='product-title'>{product.title}</h1>
                </Link>
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
