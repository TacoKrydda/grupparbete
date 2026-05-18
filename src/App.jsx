import { Outlet } from "react-router";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import { useState } from 'react';


export default function App() {
  
  const [user, setUser] = useState(localStorage.user ? JSON.parse(localStorage.user) : null);

  return (
    <div className="app">
      <ScrollToTop />
      
      {/* user och setUser som props till Header */}
      <Header user={user} setUser={setUser} />
      
      <main className="content">
        {/* Skickar user och setUser som context till alla underkomponenter - routes */}
        <Outlet context={{ user, setUser }} />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}
