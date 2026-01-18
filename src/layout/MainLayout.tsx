import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default MainLayout;
