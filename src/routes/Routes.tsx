import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import aboutUs from "../pages/aboutUs";
import studyInJapan from "../pages/studyInJapan";
import ourTeam from "../pages/ourTeam";
import faq from "../pages/faq";
import contactUs from "../pages/contactUs";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/Home" element={<Home />} />
      <Route path="/About us" element={<aboutUs />} />
      <Route path="/Study in Japan" element={<studyInJapan />} />
      <Route path="/Our Team" element={<ourTeam />} />
      <Route path="/FAQ" element={<faq />} />
      <Route path="/Contact Us" element={<contactUs />} />
    </Route>
  )
);

export default routes;
