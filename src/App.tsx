import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Users from './pages/Users';
import Links from './pages/Links';
import Login from './pages/Login';
import Products from './pages/products/Products';
import ProductForm from './pages/products/ProductForm';
import Register from './pages/Register';
import { RedirectToUsers } from './components/RedirectToUsers';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} exact component={RedirectToUsers}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/regiser'} component={Register}/>
        <Route path={'/profile'} component={Profile}/>
        <Route path={'/users'} exact component={Users}/>
        <Route path={'/users/:id/links'} component={Links}/>
        <Route path={'/products'} exact component={Products}/>
        <Route path={'/products/create'}  component={ProductForm}/>
        <Route path={'/products/:id/edit'}  component={ProductForm}/>
        <Route path={'/orders'}  component={Orders}/>
      </BrowserRouter>
      
  </div>
  );
}

export default App;
