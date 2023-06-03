import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import Register from "../../features/account/Register";
import Login from "../../features/account/Login";
import RequireAuth from "./RequireAuth";
import Orders from "../../features/orders/Orders";
import CheckoutWrapper from "../../features/checkout/CheckoutWrapper";
import Inventory from "../../features/admin/Inventory";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {element: <RequireAuth />, children: [
                {path: 'checkout', element: <CheckoutWrapper />},
                {path: 'orders', element: <Orders /> },
                {path: 'inventory', element: <Inventory />}
            ]},
            {path: 'catalog', element: <Catalog />},
            {path: 'catalog/:id', element: <ProductDetails/>},
            {path: 'about', element: <AboutPage />},
            {path: 'contact', element: <ContactPage />}, 
            {path: 'server-error', element: <ServerError /> },
            {path: 'not-found', element: <NotFound /> },
            {path: 'basket', element: <BasketPage />},
            {path: 'register', element: <Register />},
            {path: 'login', element: <Login />},
            {path: '*', element: <Navigate replace to='/not-found' />}
        ]
    }
])