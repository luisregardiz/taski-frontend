import axios from "axios";
import { TaskIn } from "../types/tasks";

const updateTask = async (url: string, task: TaskIn, token: string) => {
    try {
        const res = await axios.put(url, task, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export default updateTask;
