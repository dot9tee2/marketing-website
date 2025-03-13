import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <Loading variant="dots" text="Loading..." size="large" />
  </div>
);

const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <ErrorBoundary>
                    <Services />
                  </ErrorBoundary>
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <ErrorBoundary>
                    <About />
                  </ErrorBoundary>
                </PageTransition>
              }
            />
            <Route
              path="/portfolio"
              element={
                <PageTransition>
                  <ErrorBoundary>
                    <Portfolio />
                  </ErrorBoundary>
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <ErrorBoundary>
                    <Contact />
                  </ErrorBoundary>
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <ErrorBoundary>
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-6xl font-bold text-gray-900 mb-4">
                          404
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                          Page not found
                        </p>
                        <motion.a
                          href="/"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#8DC63F] hover:bg-[#72A730] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8DC63F]"
                        >
                          Go Home
                        </motion.a>
                      </div>
                    </div>
                  </ErrorBoundary>
                </PageTransition>
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <div className="app">
            <ScrollToTop />
            <Navbar />
            <main className="min-h-screen">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;
