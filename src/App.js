import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useContext } from "react";
import { NavigationProvider } from "./context/NavigationContext";
// import NavigationContext from "./context/NavigationContext";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
// IMPORT ALL PAGES AND SET THEM INTO DIFFERENT ROUTES
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blogs from "./components/pages/Blogs";
import PharmWriters from "./components/pages/PharmWriters";
import NotFound from "./components/pages/NotFound";
import RxDiary from "./components/pages/RxDiary";
import Donate from "./components/pages/Donate";

import BlogPage from "./components/pages/BlogPage";

function App() {
  return (
    <NavigationProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/pharm-writers" element={<PharmWriters />} />
          <Route exact path="/rx-diary" element={<RxDiary />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/not-found" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />

          <Route exact path="/blogs/:slug" element={<BlogPage />} />
        </Routes>
      </Router>
    </NavigationProvider>
  );
}

export default App;
