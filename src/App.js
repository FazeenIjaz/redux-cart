import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./styles/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster />
      <ScrollToTopButton />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
