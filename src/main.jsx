import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InputField } from "./InputField/InputField";
import { Menu } from "./Navbar";
import { Card } from "./Card/Card";
import { Hello } from "./Hello";
import { Cards } from "./Card/Cards";
import { VacCards } from "./VacCards";
import { InputCurrency } from "./InputCurrency";
//import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/links",
        element: <Cards />,
      },
      {
        path: "/calculator",
        element: <InputField />,
      },
      {
        path: "/helloworld",
        element: <Hello name={"World"} frage={"Wie gehts?"} />,
      },
      {
        path: "/vacation",
        element: <VacCards />,
      },
      {
        path: "/currency",
        element: <InputCurrency />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
