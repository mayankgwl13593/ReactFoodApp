import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "../src/components/Header";
import DashboardComponent from "./components/Dashboard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import AboutComponent from "./components/About";
import OrdersComponent from "./components/Orders";
import ErrorComponent from "./components/Error";
import RestaurantMenuComponent from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/", element: <DashboardComponent /> },
      { path: "/about", element: <AboutComponent /> },
      { path: "/orders", element: <OrdersComponent /> },
      { path: "/restaurant/:resId", element: <RestaurantMenuComponent /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
