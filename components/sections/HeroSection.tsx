"use client";

import { useContext } from "react";
import { Button } from "../ui/Button";
import { context } from "@/app/page";
import { ContextValues } from "@/types/ContextValues";
import RevealOnScroll from "../ui/AnimationContainer";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { revealSection } from "@/utils/revealSection";

function HeroSection() {
  const { themePreference } = useContext(context) as ContextValues;
  const ref = useSectionObserver();

  return (
    <section ref={ref} id="home" className={themePreference == "light" ? "bg-white" : "bg-bg-dark"}>
      <div className={`bg-transparent h-auto pt-21 mx-auto max-w-330 lg:grid lg:grid-cols-2 flex flex-col-reverse`}>
        <RevealOnScroll>
          <div className="h-auto bg-transparent flex-col mx-10 lg:ml-20">
            <span className="flex text-accent bg-bg-semi-trans border-2 border-bg-semi-trans border-solid w-fit mt-5 mb-1 py-0.5 px-3 text-m font-bold rounded-3xl font-sans">Hi, I'm Bry.</span>
            <h1 className="text-3xl font-bold text-content-secondary my-3 sm:text-5xl"><span className="text-c">Build and Design System</span> in <span className="text-gradient">Production Level.</span></h1>
            <p className="text-content-secondary font-medium mb-3 text-xl sm:text-xl">I'm Bryan, I'm a Senior High School student from I.C.T. and an aspiring website developer in the Philippines. I do self-thought programming, I built and designed systems for over 2 years of experience.</p>

            <div className="flex gap-1 ">
              <Button onClick={() => revealSection("projects")} className="border-2 border-accent text-accent py-2 px-7 text-m font-medium">Projects</Button>
              <Button onClick={() => revealSection("about-me")} className="bg-accent text-content-primary text-m font-medium py-2 px-7 ml-5 hover:text-content-primary">About Me</Button>
            </div>
          </div>
        </RevealOnScroll>
        <div className="flex align-middle justify-center w-full relative">
          <RevealOnScroll delay={300}>
            <img src="./Gemini_Generated_Image_k5vmcnk5vmcnk5vm-modified (1).png" alt="developer-picture" className={`${themePreference == "light" ? "drop-shadow-picture" : "drop-shadow-dark-picture"} w-[90%] sm:w-full mx-auto drop-shadow-picture mb-5`} />

            <span className=" text-nowrap absolute px-4 py-3 bg-linear-to-r text-sm text-white font-bold rounded-2xl right-[10%] top-[10%] from-accent-hover to-cyan-300 animate-float-micro hover:scale-[1.05]  transition-all sm:text-m">
              <RevealOnScroll delay={200}>
                Backend Developer
              </RevealOnScroll>
            </span>
            <span className=" text-nowrap absolute px-4 py-3 bg-linear-to-r text-sm text-white font-bold rounded-2xl left-[5%] top-[26%] from-accent-hover to-cyan-300 animate-float-micro hover:scale-[1.05] transition-all sm:text-m">
              <RevealOnScroll delay={400}>
                Database Manager
              </RevealOnScroll>
            </span>
            <span className=" text-nowrap absolute px-4 py-3 bg-linear-to-r text-sm text-white font-bold rounded-2xl from-accent-hover to-cyan-300 animate-float-micro hover:scale-[1.05] transition-all right-[2%] top-[45%] sm:text-m sm:right-[5%] sm:top-[50%]">
              <RevealOnScroll delay={600}>
                PERN Stack Developer
              </RevealOnScroll>
            </span>

          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

export default HeroSection