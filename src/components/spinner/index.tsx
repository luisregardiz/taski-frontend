import { FC } from "react";
import "./index.css";
interface SpinnerProps {}

const Spinner: FC<SpinnerProps> = () => {
    return (
        <div className="spinner">
            <div className="cube1"></div>
            <div className="cube2"></div>
        </div>
    );
};

export default Spinner;
