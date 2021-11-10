import axios from "axios";

const fetcher = async (url: string, token: string) => {
    try {
        const { data } = await axios.get(url, {
            headers: { Authorization: "Bearer " + token },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default fetcher;
