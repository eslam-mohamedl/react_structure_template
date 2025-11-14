import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import AppRouter from "./routes/AppRouter.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>
);
