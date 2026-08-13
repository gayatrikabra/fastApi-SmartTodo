// Layout.jsx

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">

      {/* Header */}
      <Header />

      

      {/* Main Content */}
      <main className="flex-grow-1 container py-4">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;