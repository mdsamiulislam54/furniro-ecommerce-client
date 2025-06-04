import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./Styles/style.css";

import MainLayout from "./Layouts/MainLayout.jsx";
import Login from "./UserAuthentication/Login.jsx";

import UserProvider from "./Context/User/UserProvider/UserProvider.jsx";
import Registration from "./UserAuthentication/Registration.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageNotFound from "./Pages/PageNotFound.jsx";
import { CartContextProvider } from "./Context/CartContext/CartContext.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Order from "./Pages/Order/Order.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        Component: Registration,
      },
      {
        path: "shop",
        element: <PrivateRoute><Shop /></PrivateRoute>
      },
      {
        path: "order",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <CartContextProvider>
          {/* <FilterProductsProvider> */}
            <RouterProvider router={router}></RouterProvider>
          {/* </FilterProductsProvider> */}
        </CartContextProvider>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>
);
