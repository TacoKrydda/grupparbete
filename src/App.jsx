import { Outlet } from "react-router";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
