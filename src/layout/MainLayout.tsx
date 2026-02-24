import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/next"

const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <main className="mt-17 relative">
        <Outlet />
        <Analytics />
      </main>
    </section>
  );
};

export default MainLayout;
