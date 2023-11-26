import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import {
  ErrorPage,
  HomePage,
  ProductDetailsPage,
  ShopProductPage,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopProductPage />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },
]);
