import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchTalentsPage from "./pages/SearchTalentsPage";
import OfferServicesPage from "./pages/OfferServicesPage";
import { ToastContainer } from "./components/common/Toast";
import { useToastStore } from "./store/useToastStore";

function App() {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/search-talents" element={<SearchTalentsPage />} />
            <Route path="/offer-services" element={<OfferServicesPage />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </BrowserRouter>
  );
}

export default App;
 