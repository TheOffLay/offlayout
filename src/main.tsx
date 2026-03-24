import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App";
import Layout from "./layout/Layout";
import FullStudy from "./pages/fullStudy";
import HalfStudy from "./pages/halfStudy";
// import ConsultationModal from "./components/ConsultModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/full-study", element: <FullStudy /> },
      { path: "/half-study", element: <HalfStudy /> },
      // { path: "/modal", element: <ConsultationModal /> }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
