import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import Layout from "./layout/Layout.jsx";
import "./dark-theme.css";

// Pages
import HomePage from "./pages/HomePage.jsx";
import PropertiesPage from "./pages/PropertiesPage.jsx";
import PropertyDetailPage from "./pages/PropertyDetailPage.jsx";
import LocationsPage from "./pages/LocationsPage.jsx";
import LocationDetailPage from "./pages/LocationDetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ListPropertyPage from "./pages/ListPropertyPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="properties" element={<PropertiesPage />} />
              <Route path="properties/:id" element={<PropertyDetailPage />} />
              <Route path="locations" element={<LocationsPage />} />
              <Route path="locations/:id" element={<LocationDetailPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="list-property" element={<ListPropertyPage />} />
              <Route path="favorites" element={<FavoritesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </FavoritesProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}