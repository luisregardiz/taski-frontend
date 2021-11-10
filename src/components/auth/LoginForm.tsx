import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserIn } from "../../types/user";

interface LoginFormProps {
    handleLogin: SubmitHandler<UserIn>;
}

const LoginForm: FC<LoginFormProps> = ({ handleLogin }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserIn>();
    return (
        <div className="flex pt-10 md:w-1/4 w-full mx-auto  justify-center flex-col space-y-10">
            <h1 className="text-2xl font-black text-center">Login</h1>
            <form
                className="space-y-4 bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg"
                onSubmit={handleSubmit(handleLogin)}
            >
                <div className="flex flex-col space-y-2">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        {...register("username", { required: true })}
                        className="input-task"
                    />
                    <span className="text-sm font-bold text-red-500">
                        {errors.username?.type === "required" &&
                            "Please enter a username"}
                    </span>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register("password", { required: true })}
                        className="input-task"
                    />
                    <span className="text-sm font-bold text-red-500">
                        {errors.password?.type === "required" &&
                            "Please enter a password"}
                    </span>
                </div>
                <button
                    type="submit"
                    className="btn bg-green-500 text-white w-full"
                >
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
