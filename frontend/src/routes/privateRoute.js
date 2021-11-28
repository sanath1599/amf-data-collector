import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ user }) {
  console.log("in pvt router");
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
