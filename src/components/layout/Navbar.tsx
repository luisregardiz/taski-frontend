import { FC } from "react";
import { Link } from "react-router-dom";
import { useToken } from "../../store/token";
import { useNavigate } from "react-router-dom";
import useDarkMode from "../../store/darkMode";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const token = useToken((state) => state.token);
    const addToken = useToken((state) => state.addToken);
    const setDarkMode = useDarkMode((state) => state.setDarkMode);
    const isDark = useDarkMode((state) => state.isDark);
    const navigate = useNavigate();
    const handleLogout = () => {
        addToken("");
        navigate("/");
    };

    return (
        <header className="p-5 flex items-center justify-between text-gray-800 dark:bg-gray-900 dark:text-gray-50">
            <div>
                <Link to="/">
                    <h4 className="text-2xl font-black ">taski</h4>
                </Link>
            </div>
            <nav className="flex items-center space-x-6 ">
                {!token ? (
                    <div className="flex items-center space-x-5">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Join</Link>
                    </div>
                ) : (
                    <div className="flex items-center space-x-5">
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
                <button onClick={setDarkMode}>
                    {isDark ? (
                        <MoonIcon className="w-5" />
                    ) : (
                        <SunIcon className="w-5" />
                    )}
                </button>
            </nav>
        </header>
    );
};

export default Navbar;
