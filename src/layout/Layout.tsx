import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-bg text-fg flex flex-col">
      <Header />

      <main className="h-[88vh]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
