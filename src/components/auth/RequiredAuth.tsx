import { FC } from "react";
import { useToken } from "../../store/token";
import { Navigate, useLocation } from "react-router-dom";
interface RequiredAuthProps {
    children: JSX.Element;
}

const RequiredAuth: FC<RequiredAuthProps> = ({ children }) => {
    const token = useToken((state) => state.token);
    const location = useLocation();
    if (!token) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default RequiredAuth;
