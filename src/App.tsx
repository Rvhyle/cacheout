import {
  Home,
  JeweleryPage,
  MensPage,
  TechPage,
  WomensPage,
} from './Pages/pages';

import { Navbar } from './Components/components';
import { Switch, Route } from 'react-router-dom';
const App: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/category/mens' component={MensPage} />
        <Route exact path='/category/womens' component={WomensPage} />
        <Route exact path='/category/tech' component={TechPage} />
        <Route exact path='/category/jewelery' component={JeweleryPage} />
      </Switch>
    </div>
  );
};

export default App;
