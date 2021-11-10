import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginForm from "../../components/auth/LoginForm";
import { useToken } from "../../store/token";
import { UserIn } from "../../types/user";
import userToken from "../../utils/userToken";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
interface LoginProps {}

const Login: FC<LoginProps> = () => {
    const { reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const addToken = useToken((state) => state.addToken);

    const state = location.state as { from: Location };
    const from = state ? state.from.pathname : "/dashboard";

    const handleLogin: SubmitHandler<UserIn> = (data) => {
        userToken(`${process.env.REACT_APP_API_URL}/api/v1/token`, data)
            .then((res) => {
                if (res.detail) {
                    toast.error("Username or password incorrect.");
                    return;
                }

                addToken(res.access_token);
                navigate(from, { replace: true });
                toast.success("Welcome 👋");
                reset();
            })
            .catch((err) => console.log(err));
    };
    return (
        <section className="px-5">
            <LoginForm handleLogin={handleLogin} />
        </section>
    );
};

export default Login;
