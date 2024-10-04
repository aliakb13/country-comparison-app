import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function MainLayout() {
  const params = useLocation();
  return (
    <main className="bg-[#F9FAFB]">
      <Navbar where={params.pathname} />
      <Outlet />
      <Footer />
    </main>
  );
}
