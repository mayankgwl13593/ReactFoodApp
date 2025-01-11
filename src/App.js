import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "../src/components/Header";
import DashboardComponent from "./components/Dashboard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import OrdersComponent from "./components/Orders";
import ErrorComponent from "./components/Error";
import RestaurantMenuComponent from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import CartComponent from "./components/Cart";
const AboutComponent = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  return (
    /** This is how we can provide the store **/
    <Provider store={appStore}>
      {/* This is how we can update the Context  */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <HeaderComponent />
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/", element: <DashboardComponent /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutComponent />
          </Suspense>
        ),
      },
      { path: "/orders", element: <OrdersComponent /> },
      { path: "/cart", element: <CartComponent /> },
      { path: "/restaurant/:resId", element: <RestaurantMenuComponent /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
