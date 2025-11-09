import Header from "../partials/header/header";
import Footer from "../partials/footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <main className="mt-5">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Layout;
