import axios from "axios";
import { UserIn } from "../types/user";

const userToken = async (url: string, user: UserIn) => {
    const userCredetial = new URLSearchParams({
        username: user.username,
        password: user.password,
    });
    try {
        const res = await axios.post(url, userCredetial, {
            headers: { "content-type": "application/x-www-form-urlencoded" },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export default userToken;
