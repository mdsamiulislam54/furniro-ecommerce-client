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
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <CartContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
      </CartContextProvider>
    </UserProvider>
  </StrictMode>
);
