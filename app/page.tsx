"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import HeroSection from "@/components/sections/HeroSection";
import Projects from "@/components/sections/Projects";
import ScrollUp from "@/components/sections/ScrollUp";
import SkillsOverview from "@/components/sections/SkillsOverview";
import { ContextValues } from "@/types/ContextValues";
import { createContext, useState } from "react";
export const context = createContext<ContextValues | null>(null);

export default function Page() {
  const [themePreference, setThemePreference] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState<string>("home");
  const values = {
    // Boolean
    themePreference, setThemePreference,
    // String
    activeSection, setActiveSection
    // Number
    // Object and Arrays
  } as ContextValues;

  return (
    <>
      <context.Provider value={values}>
        <Navbar />
        <HeroSection></HeroSection>
        <ScrollUp />
        <SkillsOverview />
        <Projects />
        <AboutMe/>
        <Contact />
        <Footer />
      </context.Provider>
    </>
  );
}
