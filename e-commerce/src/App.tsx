import './App.css';

import MainLayout from './layouts/MainLayout';
import ProductList from './components/ProductsList';
import Main from './pages/Main/Main';
import ProductDetails from './components/ProductDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <ProductList/>
      },
      {
        path: "/product/:productId",
        element: <ProductDetails/>
      }
    ]
  },
]);


const App: React.FC = () => {
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
