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
import Book from "./components/Trips/Book.jsx";
import Gokarna from "./components/Trips/gokarna/Gokarna.jsx";
import Chikkmangaluru from "./components/Trips/chikkmangaluru/Chikkmangaluru.jsx";
import Coorg from "./components/Trips/coorg/Coorg.jsx";
import Mysore from "./components/Trips/mysore/Mysore.jsx";
import Dandeli from "./components/Trips/dandeli/Dandeli.jsx";
import Udupi from "./components/Trips/udupi/Udupi.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/voyage/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="trips" element={<Trips />} />
      <Route path="trips/hampi" element={<Hampi />} />
      <Route path="trips/gokarna" element={<Gokarna />} />
      <Route path="trips/chikkmangaluru" element={<Chikkmangaluru />} />
      <Route path="trips/coorg" element={<Coorg />} />
      <Route path="trips/mysore" element={<Mysore />} />
      <Route path="trips/dandeli" element={<Dandeli />} />
      <Route path="trips/udupi" element={<Udupi />} />

      <Route path="book" element={<Book />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
