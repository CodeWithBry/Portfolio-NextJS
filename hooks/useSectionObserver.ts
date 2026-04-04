"use client";
import { useEffect, useRef, useContext } from "react";
import { context } from "@/app/page";
import { ContextValues } from "@/types/ContextValues";

export const useSectionObserver = () => {
    const ref = useRef<HTMLElement | null>(null);
    const { setActiveSection } = useContext(context) as ContextValues;

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;

            const { top, height } = ref.current.getBoundingClientRect();
            const middle = window.innerHeight / 2;

            // Mark as active when the section covers the middle of the screen
            if (top <= middle && top + height > middle) {
                setActiveSection(ref.current.id);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [setActiveSection]);

    return ref;
};