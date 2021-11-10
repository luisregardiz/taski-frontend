import { CreateUser } from "../types/user";

const createUser = async (url: string, user: CreateUser) => {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default createUser;
