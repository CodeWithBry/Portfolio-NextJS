import { context } from "@/app/page"
import { ContextValues } from "@/types/ContextValues"
import { ProjectType } from "@/types/ProjectType";
import { useContext } from "react"
import RevealOnScroll from "../ui/AnimationContainer";
import Link from "next/link";
import { useSectionObserver } from "@/hooks/useSectionObserver";

function Projects() {
    const { themePreference } = useContext(context) as ContextValues;
    const projects: ProjectType[] = [
        {
            projectName: "Workflow",
            projectDemoURL: "https://codewithbry.github.io/Workflow/#/",
            projectRepositoryURL: "https://github.com/CodeWithBry/Workflow/",
            projectImage: "Workflow.png",
            projectDescription: "Workflow is a full-stack AI-powered project management web application designed to enhance productivity through structured task organization, intelligent AI assistance, and real-time analytics."
        },
        {
            projectName: "BryTech",
            projectDemoURL: "https://codewithbry.github.io/BryTech/#/",
            projectRepositoryURL: "https://github.com/CodeWithBry/BryTech/",
            projectImage: "BryTech.png",
            projectDescription: "BryTech is a web project I submitted during the 2nd Quarter Web Development project at Dr. Yanga's Colleges, Inc., where it received the highest and preferred score from my teacher."
        },
        {
            projectName: "ActivityManager",
            projectDemoURL: "https://codewithbry.github.io/ActivityManager/#/",
            projectRepositoryURL: "https://github.com/CodeWithBry/ActivityManager/",
            projectImage: "ActivityManager.png",
            projectDescription: "Activity Manager is a web-based application developed to help manage and monitor academic tasks for our class, 12–McCarthy at Dr. Yanga's Colleges, Inc."
        },
        {
            projectName: "Spread",
            projectDemoURL: "https://codewithbry.github.io/Spread/#/home",
            projectRepositoryURL: "https://github.com/CodeWithBry/Spread/",
            projectImage: "Spread.png",
            projectDescription: "Spread is a web application that provides users with the latest news articles, both globally and locally in the Philippines."
        },
        {
            projectName: "DYCI B.I.N.H.I.",
            projectDemoURL: "https://codewithbry.github.io/DYCI_BINHI",
            projectRepositoryURL: "https://github.com/CodeWithBry/DYCI_BINHI/",
            projectImage: "BINHI.png",
            projectDescription: "DYCI_BINHI is a website created for Dr. Yanga's Colleges, Inc.’s B.I.N.H.I. Museum during my Grade 12 immersion program. I was tasked to design and develop this website as part of my immersion responsibilities, which I submitted to my supervisor, Ms. Mikee De Guzman."
        },
        {
            projectName: "Learn TS",
            projectDemoURL: "https://codewithbry.github.io/Learn-TS",
            projectRepositoryURL: "https://github.com/CodeWithBry/Learn-TS/",
            projectImage: "LearnTS.png",
            projectDescription: "Learn-TS is a web-based educational platform designed to teach TypeScript from beginner to advanced levels through practical examples and interactive lessons. This project is built to help learners understand TypeScript concepts clearly while practicing coding in a hands-on environment."
        },
    ];
    const ref = useSectionObserver();

    const isLight = themePreference === "light";

    return (
        <section ref={ref} id="projects" className={isLight ? "bg-bg-light" : "bg-bg-dark"}>
            <div className={`m-auto max-w-330 w-full px-6 py-20 `}>
                {/* Section Label */}
                <div className="flex justify-center mb-4">
                    <span className="
                    flex items-center gap-2
                    text-accent bg-bg-semi-trans
                    border border-accent/30
                    py-1 px-4 text-m font-bold
                    rounded-3xl font-sans tracking-widest uppercase
                ">
                        My Projects
                    </span>
                </div>

                {/* Section Heading */}
                <h2 className={`
                text-center text-3xl font-bold font-sans mb-16 text-gradient
            `}>
                    Things I've Built
                </h2>

                {/* Projects Grid — 3 columns like reference */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((pro, idx) => (
                        <RevealOnScroll key={pro.projectName} delay={idx * 150}>
                            <div className={`
                            flex flex-col rounded-2xl overflow-hidden
                            border
                            ${isLight
                                    ? "bg-white border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                                    : "bg-bg border-bg-border"
                                }
                            group h-full
                        `}>
                                {/* Image area — laptop mockup feel */}
                                <div className={`
                                relative w-full overflow-hidden
                                ${isLight ? "bg-black/5" : "bg-bg-dark"}
                                p-4 pb-0
                            `}>
                                    {/* Fake browser bar */}
                                    <div className={`
                                    flex items-center gap-1.5 mb-3 px-1
                                `}>
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                                    </div>
                                    <img
                                        src={`./projects/${pro.projectImage}`}
                                        alt={pro.projectName}
                                        className="
                                        w-full h-48 object-cover object-top rounded-t-lg
                                        group-hover:scale-[1.03] transition-transform duration-500 ease-out
                                    "
                                    />
                                </div>

                                {/* Card body */}
                                <div className="flex flex-col gap-4 p-6 flex-1">
                                    {/* Title */}
                                    <h3 className={`text-gradient text-2xl font-bold font-sans text-center`}>
                                        {pro.projectName}
                                    </h3>

                                    {/* Description */}
                                    <p className={`
                                    font-sans text-base leading-relaxed text-center flex-1
                                    ${isLight ? "text-black/60" : "text-content-secondary"}
                                `}>
                                        {pro.projectDescription}
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex gap-3 justify-center mt-auto pt-2">
                                        <Link
                                            href={pro.projectRepositoryURL}
                                            className="
                                            text-m
                                            flex items-center gap-2
                                            px-5 py-2.5 rounded-s
                                            border border-bg-border
                                            hover:border-accent/50 hover:bg-bg-semi-trans
                                            text-content-secondary hover:text-content-primary
                                            font-sans font-semibold text-sm
                                            transition-all duration-200
                                        "
                                        >
                                            {/* GitHub icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </Link>
                                        <Link
                                            href={pro.projectDemoURL}
                                            className="
                                            text-m
                                            flex items-center gap-2
                                            px-5 py-2.5 rounded-s
                                            bg-accent hover:bg-accent-hover
                                            text-content-primary
                                            font-sans font-semibold text-sm
                                            transition-colors duration-200
                                        "
                                        >
                                            {/* Demo icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="3" width="20" height="14" rx="2" />
                                                <path d="M8 21h8M12 17v4" />
                                            </svg>
                                            Demo
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;