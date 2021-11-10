import { FC } from "react";
import TaskForm from "../../components/tasks/form";
import TaskList from "../../components/tasks/list";
import UserProfile from "../../components/user/Profile";

interface TasksProps {}

const Tasks: FC<TasksProps> = () => {
    return (
        <div>
            <section className="min-h-screen p-5">
                <UserProfile />
                <div className="grid md:grid-cols-3 md:grid-rows-1 grid-rows-2 grid-cols-1 grid-flow-col gap-5">
                    <TaskForm />
                    <TaskList />
                </div>
            </section>
        </div>
    );
};

export default Tasks;
