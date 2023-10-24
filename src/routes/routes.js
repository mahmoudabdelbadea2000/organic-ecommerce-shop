import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import { ErrorPage, HomePage } from "../pages";

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
    ],
  },
]);
