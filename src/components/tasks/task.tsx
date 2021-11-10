import { FC, useState } from "react";
import { TaskData, TaskIn } from "../../types/tasks";
import moment from "moment";
import { CheckIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useSWRConfig } from "swr";
import deleteTask from "../../utils/deleteTask";
import { SubmitHandler, useForm } from "react-hook-form";
import updateTask from "../../utils/updateTask";
import { useToken } from "../../store/token";

interface TaskProps {
    task: TaskData;
}

const Task: FC<TaskProps> = ({ task }) => {
    // hooks
    const [isUpdate, setUpdate] = useState(false);
    const [taskId, setTaskId] = useState(0);
    const [isComplete, setComplete] = useState(false);
    const token = useToken((state) => state.token);
    const { mutate } = useSWRConfig();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TaskIn>({
        defaultValues: { title: task.title, task: task.task },
    });
    //date format
    const taskDate = moment(task.created_at).format("DD/MM/YYYY, h:mm A");

    //handlers
    const handleDelete = (id: number) => {
        deleteTask(`${process.env.REACT_APP_API_URL}/api/v1/tasks/${id}`, token)
            .then(() =>
                mutate([`${process.env.REACT_APP_API_URL}/api/v1/tasks`, token])
            )
            .catch((error) => console.log(error));
    };

    const handleUpdate = (id: number) => {
        setUpdate((prev) => !prev);
        setTaskId(id);
    };

    const onSubmit: SubmitHandler<TaskIn> = (data) => {
        updateTask(
            `${process.env.REACT_APP_API_URL}/api/v1/tasks/${taskId}`,
            data,
            token
        )
            .then(() => {
                mutate([
                    `${process.env.REACT_APP_API_URL}/api/v1/tasks`,
                    token,
                ]);
                setUpdate((prev) => !prev);
            })
            .catch((error) => console.log(error));
    };

    const checkedTask = (id: number) => {
        setComplete((prev) => !prev);
        const completedTask = {
            title: task.title,
            task: task.task,
            is_completed: isComplete,
        };

        updateTask(
            `${process.env.REACT_APP_API_URL}/api/v1/tasks/${id}`,
            completedTask,
            token
        )
            .then(() => {
                mutate([
                    `${process.env.REACT_APP_API_URL}/api/v1/tasks`,
                    token,
                ]);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div
            className={`${
                task.is_completed
                    ? "border-red-500 text-gray-500"
                    : "border-green-500"
            } border-2 rounded-lg shadow-lg p-5 flex items-center justify-between cursor-pointer`}
        >
            {isUpdate ? (
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                type="text"
                                {...register("title")}
                                className="input-update text-xl font-bold"
                            />
                        </div>
                        <div className="flex flex-col space-y-2 mb-2">
                            <textarea
                                {...register("task", { required: true })}
                                className="input-update"
                            ></textarea>
                            <span className="text-sm font-bold text-red-500">
                                {errors.task?.type === "required" &&
                                    "Please enter a task"}
                            </span>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="btn px-4 bg-blue-500 text-white"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="space-y-2">
                    <h4 className="text-xl font-bold ">{task.title}</h4>
                    <p>{task.task}</p>
                    <span className="italic text-sm text-gray-600 dark:text-gray-400">
                        Created: {taskDate}
                    </span>
                </div>
            )}

            <div className="space-y-2">
                <TrashIcon
                    onClick={() => handleDelete(task.id!)}
                    className="w-6 text-red-500 cursor-pointer"
                />
                <PencilAltIcon
                    onClick={() => handleUpdate(task.id!)}
                    className="w-6 text-blue-500 cursor-pointer"
                />
                <CheckIcon
                    onClick={() => checkedTask(task.id!)}
                    className="w-6 text-green-500 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Task;
