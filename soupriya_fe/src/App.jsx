import { Outlet } from "react-router";
import { Header } from "./common/components/Header";
import { Footer } from "./common/components/Footer";
import { SideNavBar } from "./common/components/SideNavBar";

import logo from './assets/SP_Logo.svg';
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SideNavBar />
      <main className="margin-x-5">
        <section className="d-flex-center">
          <img src={logo} width={50} height={45} alt="SouPriya" className="main-logo"/>
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
