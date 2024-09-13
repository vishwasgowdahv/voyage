import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./components/Home/HomePage.jsx";
import About from "./components/Home/About.jsx";
import Contact from "./components/Home/Contact.jsx";
import Trips from "./components/Trips/Trips.jsx";
import Hampi from "./components/Trips/hampi/Hampi.jsx";
import Book from "./components/Trips/hampi/Book.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/voyage/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="trips" element={<Trips />} />
      <Route path="trips/hampi" element={<Hampi />} />
      <Route path="book" element={<Book />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
