import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import { UnlockingBlog } from "./Pages/Blog/UnlockingBlog";
import ContactUs from "./Pages/ContactUs";
import { Home } from "./Pages/Home/Home";
import Testprep from "./Pages/Testprep/Testprep";
import { AboutUs } from "./Pages/AboutUs";
import StudyAbroad from "./Pages/StudyAbroad/StudyAbroad";
import Services from "./Pages/Services/Services";
import Blog from "./Pages/Blog/Blog";
import Footer from "../src/Components/Home/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/unlocking" element={<UnlockingBlog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/test" element={<Testprep />} />
          <Route path="/abroad" element={<StudyAbroad />} />
          <Route path="/service" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
