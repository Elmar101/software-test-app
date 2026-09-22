import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Phones from "./pages/Phones";
import Comment from "./pages/Comment";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/phones",
        Component: Phones,
      },
        {
        path: "/comment",
       Component: Comment,
      },
      {
        path: "*",
        Component: () => <div>Not Found</div>,
      },
    ],
  },
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
