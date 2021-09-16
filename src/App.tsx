import { Home, JeweleryPage, MensPage, ProductPage, TechPage, WomensPage } from './Pages/pages';
import { Navbar } from './Components/components';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './Redux/features/allProducts/productSlice';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  });

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/category/mens' component={MensPage} />
        <Route exact path='/category/womens' component={WomensPage} />
        <Route exact path='/category/tech' component={TechPage} />
        <Route exact path='/category/jewelery' component={JeweleryPage} />
        <Route exact path='/category/:catName/:id' component={ProductPage} />
      </Switch>
    </div>
  );
};

export default App;
