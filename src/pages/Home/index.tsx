import {
    PresentationChartBarIcon,
    UserIcon,
    UserAddIcon,
} from "@heroicons/react/outline";
import { FC } from "react";
import TaskForm from "../../components/tasks/form";
import HomeBG from "../../images/taski-home-svg.svg";
import TaskSVG from "../../images/tasksvg.svg";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../store/token";
interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const navigate = useNavigate();
    const token = useToken((state) => state.token);
    return (
        <section>
            <div
                className="min-h-screen"
                style={{
                    background: `url(${HomeBG}) no-repeat`,
                    objectFit: "contain",
                }}
            >
                <div className="flex md:flex-row flex-col justify-between items-center min-h-screen">
                    <div className="flex items-center bg-white dark:bg-gray-900 p-10 space-x-5 rounded-lg shadow-lg m-5">
                        <div className="bg-gray-100 p-5 rounded-full">
                            <img
                                src={TaskSVG}
                                alt="Task SVG"
                                className="w-16"
                            />
                        </div>
                        <div>
                            <h2 className="text-5xl font-extrabold">taski</h2>
                            <span className="text-lg italic">
                                The best app for save yours tasks
                            </span>
                        </div>
                    </div>
                    {token ? (
                        <div className="bg-white dark:bg-gray-900 py-8 px-5 mx-5 my-10 space-y-4 rounded-lg shadow-lg">
                            <h2 className="text-center text-3xl font-extrabold">
                                Quick task
                            </h2>
                            <TaskForm />
                            <button
                                onClick={() => navigate("/dashboard")}
                                className="btn bg-blue-500 text-white w-full flex items-center justify-center"
                            >
                                Go to dashboard
                                <span>
                                    <PresentationChartBarIcon className="w-5 ml-2" />
                                </span>
                            </button>
                        </div>
                    ) : (
                        <div className="bg-white dark:bg-gray-900 py-6 px-5 mx-5 my-10 space-y-4 rounded-lg shadow-lg divide-y-2 dark:divide-gray-700">
                            <div className="space-y-2 py-4">
                                <h4 className="text-center text-xl font-bold">
                                    Come on, save yours tasks!
                                </h4>
                                <button
                                    onClick={() => navigate("/login")}
                                    className="btn bg-green-500 text-white w-full "
                                >
                                    Sign in
                                    <span>
                                        <UserIcon className="w-5 ml-2" />
                                    </span>
                                </button>
                            </div>
                            <div className="space-y-2 py-4">
                                <h4 className="text-center text-xl font-bold">
                                    You don't have an account?
                                </h4>
                                <button
                                    onClick={() => navigate("/signup")}
                                    className="btn bg-blue-500 text-white w-full"
                                >
                                    Join
                                    <span>
                                        <UserAddIcon className="w-5 ml-2" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Home;
