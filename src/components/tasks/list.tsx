import { FC } from "react";
import useSWR from "swr";
import { useToken } from "../../store/token";
import { TaskData } from "../../types/tasks";
import fetcher from "../../utils/fetcher";
import sortRecents from "../../utils/sortRecents";
import Spinner from "../spinner";
import Task from "./task";

interface TaskListProps {}

const TaskList: FC<TaskListProps> = () => {
    const token = useToken((state) => state.token);
    const { data, error } = useSWR<TaskData[]>(
        [`${process.env.REACT_APP_API_URL}/api/v1/tasks`, token],
        fetcher
    );
    if (error) return <p>Sorry we have an error, try later.</p>;
    if (!data) return <Spinner />;
    return (
        <div className="md:col-span-2 bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg space-y-5 ">
            <div>
                <h1 className="text-3xl font-black">My tasks</h1>
            </div>
            <div className="space-y-4">
                {sortRecents(data!)?.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
            <div>
                {data.length > 0 && (
                    <>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                            <div className="text-sm font-semibold">
                                <span>Completed: </span>
                                <span>
                                    {
                                        data?.filter(
                                            (task) => task.is_completed === true
                                        ).length
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <div className="text-sm font-semibold">
                                <span>Pending: </span>
                                <span>
                                    {
                                        data?.filter(
                                            (task) =>
                                                task.is_completed === false
                                        ).length
                                    }
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default TaskList;
