import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateUser } from "../../types/user";

interface SignUpFormProps {
    handleSignUp: SubmitHandler<CreateUser>;
}

const SignUpForm: FC<SignUpFormProps> = ({ handleSignUp }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="flex pt-4 md:w-1/3 w-full mx-auto justify-center flex-col space-y-10">
            <h1 className="text-2xl font-black text-center">Join</h1>
            <form
                className="space-y-4 bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg"
                onSubmit={handleSubmit(handleSignUp)}
            >
                <div className="flex flex-col space-y-2">
                    <label
                        htmlFor="username"
                        className="flex justify-between font-bold"
                    >
                        Username
                        <span className="text-sm italic font-normal">
                            Required
                        </span>
                    </label>
                    <input
                        type="text"
                        maxLength={50}
                        id="username"
                        {...register("username", {
                            required: true,
                            validate: (value: string) =>
                                value === value.replace(/\s/g, ""),
                        })}
                        className="input-task"
                    />
                    <span className="text-sm font-bold text-red-500">
                        {errors.username?.type === "required" &&
                            "Please enter a username"}
                        {errors.username?.type === "validate" &&
                            "Username no valid"}
                    </span>
                </div>
                <div className="grid grid-flow-col md:grid-cols-2 gap-5 grid-cols-1 grid-rows-2 md:grid-rows-1">
                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="first_name"
                            className="flex justify-between font-bold"
                        >
                            First name
                            <span className="text-sm italic font-normal">
                                Required
                            </span>
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            maxLength={60}
                            {...register("first_name", {
                                required: true,
                            })}
                            className="input-task"
                        />
                        <span className="text-sm font-bold text-red-500">
                            {errors.first_name?.type === "required" &&
                                "Please enter a first name"}
                        </span>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="last_name"
                            className="flex justify-between font-bold"
                        >
                            Last name
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            maxLength={60}
                            placeholder="Optional"
                            {...register("last_name")}
                            className="input-task"
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <label
                        htmlFor="email"
                        className="flex justify-between font-bold"
                    >
                        Email
                        <span className="text-sm italic font-normal">
                            Required
                        </span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        maxLength={128}
                        {...register("email", {
                            required: true,
                        })}
                        className="input-task"
                    />
                    <span className="text-sm font-bold text-red-500">
                        {errors.email?.type === "required" &&
                            "Please enter a email"}
                    </span>
                </div>
                <div className="flex flex-col space-y-2">
                    <label
                        htmlFor="password"
                        className="flex justify-between font-bold"
                    >
                        Password
                        <span className="text-sm italic font-normal">
                            Required
                        </span>
                    </label>
                    <input
                        type="password"
                        id="password_hash"
                        maxLength={128}
                        {...register("password_hash", {
                            required: true,
                        })}
                        className="input-task"
                    />
                    <span className="text-sm font-bold text-red-500">
                        {errors.password_hash?.type === "required" &&
                            "Please enter a password"}
                    </span>
                </div>
                <button
                    type="submit"
                    className="btn bg-blue-500 text-white w-full"
                >
                    Join
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
