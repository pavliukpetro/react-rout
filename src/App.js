import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Root from './pages/Root';
import Error from './pages/Error';
import ProductDetails from './pages/ProductDetails';

import './App.css';

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/', element: <Homepage />
            },
            {
                path: '/products',
                element: <Products />,
                loader: async () => {
                    const response = await fetch('https://dummyjson.com/products');
                    const { products } = await response.json();

                    console.log('loader');

                    return products;
                }
            },
            {
                path: '/products/:productId', element: <ProductDetails />
            }
        ]
    }
]);

function App() {
    return (
        <RouterProvider router={routers} />
    );
}

export default App;
