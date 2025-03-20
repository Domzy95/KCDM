// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";
import NewsSection from "./components/NewsSection";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <Router>
      <Header />
      <SubHeader />
      <Routes>
        {/* Glavna pot s NewsSection */}
        <Route path="/" element={<NewsSection />} />

        {/* Pot za podstran z novicami */}
        <Route path="/novice" element={<NewsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
