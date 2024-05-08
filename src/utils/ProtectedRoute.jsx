import { Navigate }from "react-router-dom"
const email = localStorage.getItem("email");

export const ProtectedRoute = ({ children }) => {
    if (!email) {
        return (
            <Navigate to="/register" replace={true} />
        )
    }
    else {
        return (
            <>{children}</>
        )
    }

}