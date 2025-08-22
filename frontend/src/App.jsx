// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Trips from "./pages/Trips";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/trips"
          element={
            <RequireAuth>
              <Trips />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
