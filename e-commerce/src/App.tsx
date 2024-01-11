import './App.css';
import MainLayout from './layouts/MainLayout';
import ProductList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ReviewProvider } from './providers/ReviewProvider';


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
        element: <ReviewProvider>
           <ProductDetails/>
        </ReviewProvider>
      }
    ]
  },
]);


const App: React.FC = () => {
  return (
    <Provider store = {store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
