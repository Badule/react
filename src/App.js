import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import { UserPage } from "./pages/UserPage";
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <div className="container mx-auto px-3">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/user/:login" element={<UserPage />} />
                <Route path="/not-found" element={<NotFoundPage />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
