export type TaskData = {
    id?: number;
    title: string;
    task: string;
    is_completed: boolean;
    created_at?: string;
    updated_at?: string;
};

export type TaskIn = {
    title: string;
    task: string;
    is_completed?: boolean;
};

export type TaskChecked = {
    is_completed: boolean;
};
