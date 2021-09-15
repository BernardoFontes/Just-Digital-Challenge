import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={Products} />
      <Route exact path="/ProductDetails/:id" component={ProductDetails} />
    </BrowserRouter>
  </div>
  );
}

export default App;
