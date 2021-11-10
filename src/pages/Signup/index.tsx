import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SignUpForm from "../../components/auth/SignUpForm";
import { CreateUser } from "../../types/user";
import createUser from "../../utils/createUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => {
    const { reset } = useForm();
    const navigate = useNavigate();
    const handleSignUp: SubmitHandler<CreateUser> = (data) => {
        createUser(`${process.env.REACT_APP_API_URL}/api/v1/users`, data)
            .then((user) => {
                if (user.detail)
                    return toast.error("User has already been registered.");
                navigate("/login");
                toast.success("User created successfully, now login");
            })
            .catch((err) => console.log(err));
        reset();
    };
    return (
        <section className="px-5">
            <SignUpForm handleSignUp={handleSignUp} />
        </section>
    );
};

export default SignUp;
