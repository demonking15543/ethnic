import './App.css';
import Header from './container/components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './container/components/ProductList';
import ProductDetail from './container/components/ProductDetail';
import Login from './container/components/Login';
import SignupPage from './container/SignupPage';
import React, { useEffect, useState } from 'react';
import api from '../src/container/api/config'
import CategoryProductList from './container/components/CategoryProductList';
function App() {
  const [isLogin, setisLogin] = useState(()=>{
    if(localStorage.getItem("token")){
      return true
    }
  })

   
 const [categories, setCategories] = useState([])

  const category = async () => {
    const response = await api.get('/products/categories').catch(err => {
      console.log(err.response.data)

    })
    setCategories(response.data)


     
  }
  
useEffect(() => {
  category()
}, [])
    
  return (
    <div>
      <Router>        
      <Header categories={categories} isLogin={isLogin} setisLogin={setisLogin} />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route path="/products/category/:category" exact component={CategoryProductList} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/login" exact component={Login} setisLogin={setisLogin} />


        <Route>404 Not Found!</Route>
      </Switch>
      </Router>

      
    </div>
  );
}

export default App;
