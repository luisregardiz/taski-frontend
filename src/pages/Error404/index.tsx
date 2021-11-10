import { FC } from "react";
import { Link } from "react-router-dom";
import ErrorSVG from "../../images/404.svg";
interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
    return (
        <section className="flex justify-center items-center h-screen">
            <div className="bg-blue-300 md:w-1/2 p-8 rounded-xl shadow-xl space-y-4 mx-5">
                <div>
                    <img
                        src={ErrorSVG}
                        alt="Error 404"
                        className="ssssbg-contain"
                    />
                </div>
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-700 mb-2">
                        Page not found
                    </h1>
                    <p className="text-lg text-gray-700 font-bold">
                        Go to{" "}
                        <Link to="/" className="underline text-blue-600">
                            home.
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
