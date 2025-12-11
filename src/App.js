import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ensureAnonymousAuth } from "./firebase";

import { NavigationProvider } from "./context/NavigationContext";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blogs from "./components/pages/Blogs";
import PharmWriters from "./components/pages/PharmWriters";
import PansExecutives from "./components/pages/PansExecutives";
import NotFound from "./components/pages/NotFound";
import RxDiary from "./components/pages/RxDiary";
import Creativity from "./components/pages/Creativity";
import Donate from "./components/pages/Donate";
import SportUpdate from "./components/pages/SportUpdate";
import DrugSpotlight from "./components/pages/DrugSpotlight";
import Interviews from "./components/pages/Interviews";

import BlogPage from "./components/pages/BlogPage";
import CreativityPage from "./components/pages/CreativityPage";
import RxDiaryPage from "./components/pages/RxDiaryPage";
import SportUpdatePage from "./components/pages/SportUpdatePage";
import DrugSpotlightPage from "./components/pages/DrugSpotlightPage";
import InterviewsPage from "./components/pages/InterviewsPage";

function App() {
  useEffect(() => {
    ensureAnonymousAuth(); // auto login user silently
  }, []);

  return (
    <NavigationProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/pharm-writers" element={<PharmWriters />} />
          <Route exact path="/pans-executives" element={<PansExecutives />} />
          <Route exact path="/rx-diary" element={<RxDiary />} />
          <Route exact path="/sport-update" element={<SportUpdate />} />
          <Route exact path="/creativity" element={<Creativity />} />
          <Route exact path="/interviews" element={<Interviews />} />
          <Route exact path="/drug-spotlight" element={<DrugSpotlight />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/not-found" element={<NotFound />} />

          <Route exact path="/blogs/:slug" element={<BlogPage />} />
          <Route exact path="/rx-diary/:slug" element={<RxDiaryPage />} />
          <Route exact path="/creativity/:slug" element={<CreativityPage />} />
          <Route exact path="/interviews/:slug" element={<InterviewsPage />} />
          <Route
            exact
            path="/sport-update/:slug"
            element={<SportUpdatePage />}
          />
          <Route
            exact
            path="/drug-spotlight/:slug"
            element={<DrugSpotlightPage />}
          />

          {/* Routes that dont match */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </NavigationProvider>
  );
}

export default App;
