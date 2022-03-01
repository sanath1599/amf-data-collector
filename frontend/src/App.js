import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import PublicRoute from "./routes/publicRoute";
import PrivateRoute from "./routes/privateRoute";

import authService from "./services/auth.service";
import { CircularProgress } from "@mui/material";
import Login from "./components/IdentityComponents/login";
import Register from "./components/IdentityComponents/register";
import Home from "./containers/Home";
import Patient from "./containers/Patient";

function App() {
  const user = authService.getCurrentUser();
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route exact path="/login" element={<PublicRoute user={user} />}>
            <Route exact path="/login" element={<Login />} />
          </Route>
          <Route exact path="/register" element={<PublicRoute user={user} />}>
            <Route exact path="/register" element={<Register />} />
          </Route>
          <Route exact path="/" element={<PublicRoute user={user} />}>
            <Route exact path="/" element={<Patient />} />
          </Route>
          <Route exact path="/patient" element={<PublicRoute user={user} />}>
            <Route exact path="/patient" element={<Patient />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
