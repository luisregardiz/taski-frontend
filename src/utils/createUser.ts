import { CreateUser } from "../types/user";
import axios from "axios";
const createUser = async (url: string, user: CreateUser) => {
    try {
        const res = await axios.post(url, user);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export default createUser;
