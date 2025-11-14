import About from "../pages/about";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
const AppRouter = createBrowserRouter([
  // Public layout
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  // Page Not Page
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default AppRouter;
