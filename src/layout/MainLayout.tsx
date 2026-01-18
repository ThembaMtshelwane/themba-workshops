import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <main className="mt-22 relative">
        <Outlet />
      </main>
    </section>
  );
};

export default MainLayout;
