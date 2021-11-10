import create from "zustand";
import { persist } from "zustand/middleware";

export const useToken = create(
    persist(
        (set) => ({
            token: "",
            addToken: (token: string) => set((state) => ({ ...state, token })),
        }),
        { name: "user_taski" }
    )
);
