import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useContext } from "react";
import { NavigationProvider } from "./context/NavigationContext";
// import NavigationContext from "./context/NavigationContext";
import Navbar from "./components/Navbar";
// IMPORT ALL PAGES AND SET THEM INTO DIFFERENT ROUTES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PharmWriters from "./pages/PharmWriters";
import NotFound from "./pages/NotFound";
import PharmSchLife from "./pages/PharmSchLife";
import MobileMenu from "./components/MobileMenu";

function App() {
  return (
    <NavigationProvider>
      <div>
        <Router>
          <div className="fixed w-full z-50">
            <Navbar />
            <MobileMenu />
          </div>
          <div className="">
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
        </Router>
      </div>
    </NavigationProvider>
  );
}

export default App;
