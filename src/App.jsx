import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-page">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="soft-grid absolute inset-0" />

        <div className="absolute -left-40 top-40 size-100 rounded-full bg-secondary/10 blur-[120px]" />

        <div className="absolute -right-32 top-140 size-96 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <Navbar />

      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/projects/:slug" element={<ProjectDetails />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
