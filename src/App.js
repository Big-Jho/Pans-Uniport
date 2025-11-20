import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useContext } from "react";
import { NavigationProvider } from "./context/NavigationContext";
// import NavigationContext from "./context/NavigationContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// IMPORT ALL PAGES AND SET THEM INTO DIFFERENT ROUTES
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import PharmWriters from "./components/pages/PharmWriters";
import NotFound from "./components/pages/NotFound";
import PharmSchLife from "./components/pages/PharmSchLife";
import MobileMenu from "./components/layout/MobileMenu";

function App() {
  return (
    <NavigationProvider>
      <Router>
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="relative">
            <Navbar />
            <MobileMenu />
          </div>
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/pharm-writers" element={<PharmWriters />} />
            <Route exact path="/pharmschlife" element={<PharmSchLife />} />
            <Route exact path="/not-found" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </NavigationProvider>
  );
}

export default App;
