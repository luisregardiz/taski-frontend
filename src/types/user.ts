export type UserIn = {
    username: string;
    password: string;
};

export type Token = {
    token: string;
    addToken: (token: string) => void;
};

export type CreateUser = {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password_hash: string;
};

export type UserData = {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    created_at: string;
    modified_at: string;
};
