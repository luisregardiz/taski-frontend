import create, { GetState, SetState } from "zustand";
import { persist, StoreApiWithPersist } from "zustand/middleware";

type DarkMode = {
    isDark: boolean;
    setDarkMode: () => void;
};

const useDarkMode = create(
    persist<
        DarkMode,
        SetState<DarkMode>,
        GetState<DarkMode>,
        StoreApiWithPersist<DarkMode>
    >(
        (set) => ({
            isDark: false,
            setDarkMode: () => set((state) => ({ isDark: !state.isDark })),
        }),
        { name: "taski-darkmode" }
    )
);

export default useDarkMode;
