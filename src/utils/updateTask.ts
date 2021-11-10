import { TaskIn } from "../types/tasks";

const updateTask = async (url: string, task: TaskIn, token: string) => {
    try {
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(task),
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default updateTask;
