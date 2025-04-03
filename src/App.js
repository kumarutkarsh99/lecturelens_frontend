import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import UploadForm from './UploadForm';
import SearchForm from './SearchForm';
import Header from './header';
import Intro from './intro';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Intro />
            </PageWrapper>
          }
        />
        <Route
          path="/upload"
          element={
            <PageWrapper>
              <UploadForm />
            </PageWrapper>
          }
        />
        <Route
          path="/search"
          element={
            <PageWrapper>
              <SearchForm />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
