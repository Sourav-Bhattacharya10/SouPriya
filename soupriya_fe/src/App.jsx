import { Outlet } from "react-router";
import { Header } from "./common/components/Header";
import { Footer } from "./common/components/Footer";

import "./App.css";
import { SideNavBar } from "./common/components/SideNavBar";

function App() {
  return (
    <>
      <Header />
      <SideNavBar />
      <main className="margin-x-5">
        <section className="d-flex-center">
          <h1>SouPriya</h1>
        </section>
        <section className="outlet-relative">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
