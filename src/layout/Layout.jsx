import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchOverlay from "../components/SearchOverlay";
import ScrollToTop from "./ScrollToTop";
import { useReveal } from "../hooks/useReveal";

export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const rootRef = useReveal([location.key]);

  return (
    <>
      <ScrollToTop />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <main ref={rootRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}