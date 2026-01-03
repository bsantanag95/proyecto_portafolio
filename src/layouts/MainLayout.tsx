import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div className="flex">
      <Header />

      <div
        className="
      flex min-h-screen w-full flex-col
      md:ml-64
    "
      >
        <Sidebar />
        <main className="flex-1 px-4 py-6 md:px-8">
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
