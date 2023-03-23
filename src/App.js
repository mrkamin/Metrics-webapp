import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';
import { fetchStockMaterial } from './redux/Stock-Screener/stockScreener';

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchStockMaterial());

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
