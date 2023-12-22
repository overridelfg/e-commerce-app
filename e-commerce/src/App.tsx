import React, { FC } from 'react';
import Header from './components/Header/Header';
import './App.css';
import ProductList from './components/ProductsList/ProductsList';
import { Box } from '@mui/material';
import Main from './pages/Main/Main';
import CategoriesSidebar from './components/CategoriesSidebar/CategoriesSidebar';

const App: FC = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
        <Header/>
        <Box sx={{display: "flex"}}>
          <CategoriesSidebar/>
          <Main/>
        </Box>
    </Box>
  );
}

export default App;
