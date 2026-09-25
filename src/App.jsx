import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";

import { useLayoutEffect, useRef } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";

function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  const scrollPositions = useRef(new Map());

  // Let this component control scroll restoration.
  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  // Save the current page's scroll position.
  useLayoutEffect(() => {
    const savePosition = () => {
      scrollPositions.current.set(location.key, {
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    let frameId;

    const handleScroll = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(savePosition);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.key]);

  // Handle navigation.
  useLayoutEffect(() => {
    if (navigationType === "POP") {
      const savedPosition = scrollPositions.current.get(location.key);

      if (savedPosition) {
        requestAnimationFrame(() => {
          window.scrollTo({
            left: savedPosition.x,
            top: savedPosition.y,
            behavior: "auto",
          });
        });

        return;
      }
    }

    // PUSH / REPLACE or an unsaved POP position.
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "auto",
    });
  }, [location.key, navigationType]);

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

      <ScrollManager />

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
