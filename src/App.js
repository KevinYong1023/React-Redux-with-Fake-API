import './App.css'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import ProductDetail from './Containers/ProductDetail'
import ProductList from './Containers/ProductList'

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/:productId" component={ProductDetail} />
        <Route>404 Not Found!</Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
