import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "../components/Home";
import Compare from "../components/Compare";
import News from "../components/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/compare",
        element: <Compare />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);
