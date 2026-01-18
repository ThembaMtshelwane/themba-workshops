import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <main className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Outlet />
      </main>
    </section>
  );
};

export default MainLayout;
