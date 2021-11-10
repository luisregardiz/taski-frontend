const deleteTask = async (url: string, token: string) => {
    try {
        const res = await fetch(url, {
            method: "DELETE",
            headers: { Authorization: "Bearer " + token },
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default deleteTask;
