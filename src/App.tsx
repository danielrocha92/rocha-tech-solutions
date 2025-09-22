import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import Portfolio from "./sections/Portfolio/Portfolio";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import './App.css';
import ScrollButtons from "./components/ScrollButtons/ScrollButtons";
import ScrollToTop from './hooks/ScrollToTop'; // Importação do componente ScrollToTop

function App() {
  return (
    <div className="app-container">
      {/* O ScrollToTop deve ser renderizado aqui, dentro do BrowserRouter principal que está em index.tsx */}
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <ScrollButtons />
      <Footer />
    </div>
  );
}

export default App;
