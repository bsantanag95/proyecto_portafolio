import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div className="flex">
      <Header />

      {/* Sidebar solo visible desde md */}
      <Sidebar />

      <div
        className="
      flex min-h-screen w-full flex-col
      md:ml-64
    "
      >
        <main className="flex-1 px-4 py-6 md:px-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
