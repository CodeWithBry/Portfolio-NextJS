"use client"
import { useContext, useState, useEffect, useRef } from "react";
import { ContextValues } from "@/types/ContextValues";
import { context } from "@/app/page";
import { Button } from "../ui/Button";
import { revealSection } from "@/utils/revealSection";

export type Tab = {
    tabName: string,
    tabId: number,
    tabPath: string
}

function Navbar() {
    const { themePreference, setThemePreference, activeSection } = useContext(context) as ContextValues;
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const isLight = themePreference === "light";

    const tabs: Tab[] = [
        { tabName: "Home", tabId: 1, tabPath: "/" },
        { tabName: "Skills", tabId: 2, tabPath: "/skills" },
        { tabName: "Projects", tabId: 3, tabPath: "/projects" },
        { tabName: "About", tabId: 4, tabPath: "/about" },
        { tabName: "Contact", tabId: 5, tabPath: "/contact" },
    ];

    // Close menu on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setTimeout(() => setMenuOpen(false), 1000)
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        };
    }, []);

    // Close menu on resize past breakpoint
    useEffect(() => {
        const handler = () => { if (window.innerWidth >= 800) setMenuOpen(false); };
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    const handleTabClick = (tabName: string) => {
        revealSection(tabName.toLowerCase());
        setMenuOpen(false);
    };

    return (
        <>
            <header className={` sticky top-0 z-50 w-full font-sans transition-colors duration-300 
                ${isLight ? "bg-bg-light shadow-gray-200" : "bg-bg-dark shadow-gray-700"} shadow-2xl `} >
                <nav className="max-w-330 w-full flex items-center justify-between mx-auto px-5 py-4" ref={menuRef}>

                    {/* Logo */}
                    <h1 className="text-gradient text-3xl font-bold select-none">CodeWithBry</h1>

                    {/* Desktop tabs — hidden below 800px */}
                    <div className="hidden min-[800px]:flex items-center">
                        {tabs.map((tab) => {
                            const isActive = activeSection.toLowerCase() === tab.tabName.toLowerCase();
                            return (
                                <div key={tab.tabPath} className="relative flex self-center">
                                    <Button
                                        onClick={() => handleTabClick(tab.tabName)}
                                        className={isActive ? "btn-primary active font-bold" : "btn-primary not-active font-bold"}
                                    >
                                        {tab.tabName}
                                    </Button>
                                    <span className={isActive ? "active-indicator" : "not-active-indicator"} />
                                </div>
                            );
                        })}

                        {/* Theme toggle — desktop */}
                        <Button
                            onClick={() => setThemePreference(prev => prev === "light" ? "dark" : "light")}
                            className={`border-2 opacity-20 mx-1 mr-2 cursor-pointer transition-all hover:opacity-40 ${isLight ? "text-gray-400 hover:text-gray-500" : "text-gray-400 hover:text-gray-300"}`} >
                            <i className={isLight ? "fa-regular fa-sun" : "fa-regular fa-moon"} />
                        </Button>
                    </div>

                    {/* Mobile right — theme toggle + hamburger, shown below 800px */}
                    <div className="flex items-center gap-2 min-[800px]:hidden">
                        <Button
                            onClick={() => setThemePreference(prev => prev === "light" ? "dark" : "light")}
                            className={`border-2 opacity-20 cursor-pointer transition-all hover:opacity-40 ${isLight ? "text-gray-400 hover:text-gray-500" : "text-gray-400 hover:text-gray-300"}`} >
                            <i className="fa-regular fa-sun" />
                        </Button>

                        {/* Hamburger button */}
                        <button
                            onClick={() => setMenuOpen(prev => !prev)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            className={` relative w-10 h-10 flex flex-col items-center justify-center gap-1.25
                                rounded-s cursor-pointer transition-colors duration-200
                                ${isLight ? "hover:bg-gray-100" : "hover:bg-bg-border"}
                            `}>
                            {/* Top bar */}
                            <span
                                className={` block h-0.5 w-5 rounded-full transition-all duration-300 origin-center
                                    ${isLight ? "bg-bg-dark" : "bg-content-primary"}
                                    ${menuOpen ? "translate-y-1.75 rotate-45" : ""}
                                `}
                            />
                            {/* Middle bar */}
                            <span
                                className={` block h-0.5 w-5 rounded-full transition-all duration-300
                                    ${isLight ? "bg-bg-dark" : "bg-content-primary"}
                                    ${menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}
                                `}
                            />
                            {/* Bottom bar */}
                            <span
                                className={` block h-0.5 w-5 rounded-full transition-all duration-300 origin-center
                                    ${isLight ? "bg-bg-dark" : "bg-content-primary"}
                                    ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}
                                `}
                            />
                        </button>
                    </div>
                </nav>

                {/* Mobile dropdown menu */}
                <div
                    className={` min-[800px]:hidden overflow-hidden transition-all duration-300 ease-in-out
                        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                        ${isLight ? "bg-bg-light border-t border-gray-200" : "bg-bg-dark border-t border-bg-border"}
                    `} >
                    <ul className="flex flex-col px-5 py-3 gap-1">
                        {tabs.map((tab, i) => {
                            const isActive = activeSection.toLowerCase() === tab.tabName.toLowerCase();
                            return (
                                <li
                                    key={tab.tabPath}
                                    className={`
                                        transition-all duration-300
                                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
                                    `}
                                    style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}>
                                    <Button
                                        onClick={() => handleTabClick(tab.tabName)}
                                        className={` w-full text-left px-3 py-2.5 rounded-s text-m font-semibold font-sans
                                            transition-colors duration-200 cursor-pointer
                                            ${isActive
                                                ? "text-accent bg-bg-semi-trans"
                                                : isLight
                                                    ? "text-bg-dark hover:text-accent hover:bg-gray-100"
                                                    : "text-content-secondary hover:text-accent hover:bg-bg-border"
                                            }
                                        `}>
                                        {tab.tabName}
                                    </Button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Navbar;