import { Outlet } from "react-router";
import { Header } from "./common/components/Header";
import { Footer } from "./common/components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="margin-x-5">
        <section className="d-flex-center">
          <h1>SouPriya</h1>
        </section>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
