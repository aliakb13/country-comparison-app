import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "../components/Home";
import Compare from "../components/Compare";
import News from "../components/News";
import CompareRes from "../components/CompareRes";

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
        path: "compare",
        element: <Compare />,
        children: [
          {
            path: ":code1/n/:code2",
            element: <CompareRes />,
          },
        ],
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
]);
