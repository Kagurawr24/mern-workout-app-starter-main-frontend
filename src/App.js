import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext'; // Import the provider
import { useAuthContext } from "./hooks/useAuthContext";  // Import the hook

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/NavBar";

function App() {
  const { user } = useAuthContext();

  return (
    <AuthContextProvider> {/* Wrap your app with the AuthContextProvider */}
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
