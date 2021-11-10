import { TaskIn } from "../types/tasks";
import axios from "axios";
const addTask = async (url: string, task: TaskIn, token: string) => {
    try {
        const res = await axios.post(url, task, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export default addTask;
