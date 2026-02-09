import { Outlet } from "react-router";
import { Header } from "../components/navbar/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
