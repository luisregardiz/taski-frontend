import { SWRConfig } from "swr";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Tasks from "./pages/Task";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequiredAuth from "./components/auth/RequiredAuth";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/Signup";
import useDarkMode from "./store/darkMode";
import { useEffect } from "react";
import ErrorPage from "./pages/Error404";
const App = () => {
    const isDark = useDarkMode((state) => state.isDark);
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <>
            <SWRConfig>
                <Navbar />
                <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-50 ">
                    <Toaster position="top-left" reverseOrder={false} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route
                            path="dashboard"
                            element={
                                <RequiredAuth>
                                    <Tasks />
                                </RequiredAuth>
                            }
                        />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </main>
                <Footer />
            </SWRConfig>
        </>
    );
};

export default App;
