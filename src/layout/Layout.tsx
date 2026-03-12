import { Outlet } from 'react-router'
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="bg-[#000000] min-h-screen text-white">
      <Navbar />
      <Outlet />
    </div>
  );
}