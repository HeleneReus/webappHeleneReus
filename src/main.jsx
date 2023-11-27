import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InputFlied } from "./InputField/InputField";
import { Menu } from "./Navbar";
import { Card } from "./Card/Card";
import { Hello } from "./Hello";
//import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/links",
        element: <Card />,
      },
      {
        path: "/calculator",
        element: <InputFlied />,
      },
      {
        path: "/helloworld",
        element: <Hello />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
