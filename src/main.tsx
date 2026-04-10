import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App";
import Layout from "./layout/Layout";
import ZernX from "./pages/zernx";
import Splixor from "./pages/splixor";
import Veltrix from "./pages/veltrix";
import Synai from "./pages/synai";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/zernx-case-study", element: <ZernX /> },
      { path: "/splixor-case-study", element: <Splixor /> },
      { path: "/veltrix-case-study", element: <Veltrix /> },
      { path: "/synai-case-study", element: <Synai /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
