import "./App.css";

import HomePage from "./components/Home/HomePage";
import Footer from "./components/Home/Footer";
import Navbar from "./components/Home/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
