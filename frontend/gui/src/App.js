import './App.css';
import Header from './container/components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; import "react-router-dom";
import ProductList from './container/components/ProductList';

function App() {
  return (
    <div>
      <Router>        
      <Header />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route>404 Not Found!</Route>
      </Switch>
      </Router>

      
    </div>
  );
}

export default App;
