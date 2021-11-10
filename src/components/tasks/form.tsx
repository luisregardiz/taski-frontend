import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TaskIn } from "../../types/tasks";
import addTask from "../../utils/addTask";
import { useSWRConfig } from "swr";
import { useToken } from "../../store/token";
import { PlusCircleIcon } from "@heroicons/react/outline";
interface TaskFormProps {}

const TaskForm: FC<TaskFormProps> = () => {
    const token = useToken((state) => state.token);
    const [isLoading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TaskIn>();
    const { mutate } = useSWRConfig();

    const onSubmit: SubmitHandler<TaskIn> = (data) => {
        setLoading(true);
        addTask(`${process.env.REACT_APP_API_URL}/api/v1/tasks`, data, token)
            .then(() =>
                mutate([`${process.env.REACT_APP_API_URL}/api/v1/tasks`, token])
            )
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            });

        reset();
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4 bg-white dark:bg-gray-900 shadow-lg p-5 rounded-lg "
            >
                <div className="flex flex-col space-y-2">
                    <label
                        htmlFor="title"
                        className="flex justify-between text-lg font-bold"
                    >
                        Title:
                        <span className="text-sm italic font-normal">
                            Required
                        </span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        maxLength={30}
                        {...register("title", { required: true })}
                        className="input-task"
                    />
                    <span className="text-sm italic text-gray-700 dark:text-gray-400">
                        Max 30 char.
                    </span>
                    <span className="text-sm font-bold text-red-500">
                        {errors.title?.type === "required" &&
                            "Please enter a title"}
                    </span>
                </div>
                <div className="flex flex-col space-y-2">
                    <label
                        htmlFor="task"
                        className="flex justify-between text-lg font-bold"
                    >
                        Task:
                        <span className="text-sm italic font-normal">
                            Required
                        </span>
                    </label>
                    <textarea
                        id="task"
                        maxLength={225}
                        {...register("task", { required: true })}
                        className="input-task"
                    ></textarea>
                    <span className="text-sm italic text-gray-700 dark:text-gray-400">
                        Max 225 char.
                    </span>
                    <span className="text-sm font-bold text-red-500">
                        {errors.task?.type === "required" &&
                            "Please enter a task"}
                    </span>
                </div>
                <div className="space-x-3">
                    <input
                        type="checkbox"
                        id="is_completed"
                        {...register("is_completed")}
                        className="checkbox-task"
                    />
                    <label htmlFor="is_completed">Completed</label>
                </div>
                <button
                    type="submit"
                    className="btn bg-gray-900 dark:bg-gray-50 dark:text-gray-900 text-gray-50"
                >
                    {isLoading ? "Adding.." : "Add Task"}

                    <span>
                        {!isLoading && <PlusCircleIcon className="w-5 ml-2" />}
                    </span>
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
