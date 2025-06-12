import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import BookTable from "./Pages/BookTable";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          
          <Route path="/booktable" element={<BookTable />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
