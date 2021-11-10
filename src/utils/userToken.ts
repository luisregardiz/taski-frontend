import { UserIn } from "../types/user";

const userToken = async (url: string, user: UserIn) => {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: user.username,
                password: user.password,
            }),
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default userToken;
