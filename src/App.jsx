import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Congo } from "./pages/Congo";
import { ProtectedRoute } from "./utils/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/congo" element={<Congo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
