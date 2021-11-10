import { TaskData } from "../types/tasks";

const sortRecents = (data: TaskData[]): TaskData[] => {
    if (data?.length > 0) {
        const result = data.sort(
            (a: TaskData, b: TaskData) =>
                Date.parse(b.created_at!) - Date.parse(a.created_at!)
        );
        return result;
    }

    return [];
};

export default sortRecents;
