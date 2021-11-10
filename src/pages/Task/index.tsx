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
                <div className="md:grid md:grid-cols-3 md:grid-rows-1  md:grid-flow-col md:gap-5 space-y-5 md:space-y-0">
                    <TaskForm />
                    <TaskList />
                </div>
            </section>
        </div>
    );
};

export default Tasks;
