import './App.css';
import Header from './container/components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; import "react-router-dom";
import ProductList from './container/components/ProductList';
import ProductDetail from './container/components/ProductDetail';
import Registration from './container/components/Registration';
import Login from './container/components/Login';

function App() {
  return (
    <div>
      <Router>        
      <Header />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route path="/signup" exact component={Registration} />
        <Route path="/login" exact component={Login} />

        <Route>404 Not Found!</Route>
      </Switch>
      </Router>

      
    </div>
  );
}

export default App;
