import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  const hiddenRoutes = ["/full-study", "/modal"];
  const hideNavAndFooter = hiddenRoutes.includes(location.pathname);

  return (
    <div className="bg-[#000000] min-h-screen text-white">
      {!hideNavAndFooter && <Navbar />}
      <Outlet />
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}
