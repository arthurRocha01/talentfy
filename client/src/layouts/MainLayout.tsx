import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-surface-soft text-text-light">
      <div className="absolute inset-0 -z-10 animate-gradient-loop bg-[length:200%_200%] bg-talentfy-radial" />

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[90vh] bg-gradient-to-b from-black/40 via-surface-soft/60 to-transparent" />

      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
 