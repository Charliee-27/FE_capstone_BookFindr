import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Search from "./pages/Search";
import BookDetails from "./components/BookDetails";
import MainLayout from "./components/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <MainLayout /> }>
      <Route index element={ <Home /> }/>
      <Route path="search" element={ <Search /> }/>
      <Route path="book/:key" element={ <BookDetails /> }/> {/* Ensure this path is correct */}
      <Route path="about-us" element={ <AboutUs /> }/>
      <Route path="contact-us" element={ <ContactUs /> }/>
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
