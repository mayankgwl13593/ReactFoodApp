import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "../src/components/Header";
import DashboardComponent from "./components/Dashboard";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <DashboardComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
