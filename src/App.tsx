import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Users from './pages/Users';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} exact component={Users}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/regiser'} component={Register}/>

      </BrowserRouter>
      
  </div>
  );
}

export default App;
