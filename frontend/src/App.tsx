import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Features from "./pages/Features";
import Login from "./Auth/LoginPage";
import Register from "./Auth/RegisterPage";
import ForgotPassword from "./Auth/ForgotPassword";
import { ScrollPreserver } from "./components/ScrollPreserver";
import Careers from "./pages/Careers";
//import { BellRingIcon } from "lucide-react";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const App = () => {
  return (
    <ScrollPreserver>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/blog/category/:category" element={<BlogCategory />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />



      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
    </ScrollPreserver>
  );
};

export default App;
