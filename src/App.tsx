import { Home, MensPage } from './Pages/pages';
import { Navbar } from './Components/components';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/mens' component={MensPage} />
      </Switch>
    </div>
  );
}

export default App;
