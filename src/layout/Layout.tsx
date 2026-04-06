import { Outlet } from "react-router";
import { Analytics } from "@vercel/analytics/react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
import { ModalProvider } from "../context/ModalContext";

export default function Layout() {
  // const location = useLocation();
  // const hiddenRoutes = ["/full-study", "/half-study"];
  // const hideNavAndFooter = hiddenRoutes.includes(location.pathname);

  return (
    <ModalProvider>
      <div className="bg-[#000000] min-h-screen text-white">
        {/* {!hideNavAndFooter && <Navbar />} */}
        <Outlet />
        {/* {!hideNavAndFooter && <Footer />} */}
        <Analytics />
      </div>
    </ModalProvider>
  );
}
