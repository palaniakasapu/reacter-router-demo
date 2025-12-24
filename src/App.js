import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import {Admin} from './components/Admin';
import { Navbar } from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import Products from './components/Products';
import NoMatch from './components/NoMatch';
import FeatureProducts from './components/FeatureProducts';
import NewProducts from './components/NewProducts';
import {Users} from './components/Users';
import {UserDetails} from './components/UserDetails';
import Profile from './components/Profile';
const lazyAbout = React.lazy(() => import('./components/About'));


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<React.Suspense fallback={<div>Loading...</div>}><lazyAbout /></React.Suspense>} />
      <Route path='order-summary' element={<OrderSummary />} />
      <Route path='products' element={<Products />}>
      <Route index element={<FeatureProducts />} />
      
        <Route path='featured' element={<FeatureProducts />} />
        <Route path='new' element={<NewProducts />} />  
      </Route>
      <Route path='users' element={<Users />}>
      <Route path='users/:userId' element={<UserDetails />} />
      <Route path='admin' element={<Admin />} />
      </Route>
      <Route path='profile' element={<Profile />} />
      <Route path='*' element={<NoMatch />} />
      </Routes>
      </>
  );
}

export default App;
