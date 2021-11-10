import axios from "axios";

const deleteTask = async (url: string, token: string) => {
    try {
        const res = await axios.delete(url, {
            headers: { Authorization: "Bearer " + token },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export default deleteTask;
