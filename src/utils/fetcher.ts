const fetcher = async (url: string, token: string) => {
    try {
        const res = await fetch(url, {
            headers: { Authorization: "Bearer " + token },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default fetcher;
