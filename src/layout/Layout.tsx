import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import MouseFollower from "./components/MouseFollower";

function Layout() {
  return (
    <div className="min-h-screen bg-bg text-fg flex flex-col">
      <Header />

      <main className="h-[82vh]">
        <Outlet />
      </main>
      <MouseFollower />

    </div>
  );
}

export default Layout;
