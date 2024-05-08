import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const email = localStorage.getItem("email");
  if (!email) {
    return <Navigate to="/register" replace={true} />;
  } else {
    return <>{children}</>;
  }
};
