import { Outlet, useLocation } from "react-router-dom";
import { BreadCrumbs, Footer, Header } from "./components";

function Layout() {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname !== "/" && <BreadCrumbs />}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
