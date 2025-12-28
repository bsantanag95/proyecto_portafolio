import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div className="flex">
      <Header />
      <Sidebar />

      <div className="ml-64 flex min-h-screen w-full flex-col">
        <main className="flex-1 px-8 py-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
