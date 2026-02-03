import { Outlet } from "react-router";
import { Header } from "../components/navbar/Header";
import Footer from "../components/footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
