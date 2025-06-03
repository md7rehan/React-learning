import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ErrorPage from "../pages/ErrorPage";
import ProductDetails from "../pages/ProductDetails";
import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      { path: "product", element: <Product /> },
      { path: 'product/:id', element: <ProductDetails />}
    ],
  },
]);

export default route;
