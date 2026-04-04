import { Dispatch, SetStateAction } from "react";

export type ContextValues = {
    // Boolean
    themePreference: "light" | "dark";
    setThemePreference: Dispatch<SetStateAction<"light" | "dark">>;
    // Strings
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
    // Numbers 

    // Objects and Arrays

    // Functions
}