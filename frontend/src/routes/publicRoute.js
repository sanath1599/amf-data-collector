import { Navigate, Outlet } from "react-router-dom";

function PublicRoute({ user }) {
  console.log("in public router");
  return user ? <Navigate to="/home" /> : <Outlet />;
}

export default PublicRoute;
