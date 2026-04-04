import { context } from "@/app/page"
import { ContextValues } from "@/types/ContextValues"
import { useContext } from "react"
import RevealOnScroll from "../ui/AnimationContainer"
import { useSectionObserver } from "@/hooks/useSectionObserver"

const SKILLS = [
    { id: 0, path: "next-js.svg", tech: "Next.js", tag: "full-stack", desc: "Builds optimized full-stack apps with SSR, routing, and scalable architecture." },
    { id: 1, path: "react-seeklogo.svg", tech: "React", tag: "frontend", desc: "Creates reusable, high-performance component systems with clean state control." },
    { id: 2, path: "Node.png", tech: "Node.js", tag: "backend", desc: "Develops secure and scalable backend services with structured API design." },
    { id: 3, path: "icons8-express-js.svg", tech: "Express", tag: "backend", desc: "Builds modular APIs with middleware, validation, and access control." },
    { id: 4, path: "typescript.png", tech: "TypeScript", tag: "language", desc: "Implements strict type safety for scalable and predictable applications." },
    { id: 5, path: "firebase.png", tech: "Firebase", tag: "database", desc: "Designs optimized No Relational databases using Firestore and strong security for authentication." },
]

const TAG_STYLES: Record<string, string> = {
    "full-stack": "bg-blue-50   text-blue-600   border-blue-100",
    "frontend": "bg-green-50  text-green-700  border-green-100",
    "backend": "bg-amber-50  text-amber-700  border-amber-100",
    "language": "bg-purple-50 text-purple-700 border-purple-100",
    "database": "bg-teal-50   text-teal-700   border-teal-100",
    "design": "bg-pink-50   text-pink-700   border-pink-100",
}

export default function SkillsOverview() {
    const { themePreference } = useContext(context) as ContextValues
    const ref = useSectionObserver();
    const dark = themePreference === "dark";

    return (
        <section ref={ref} id="skills" className={`${dark ? "bg-bg-dark" : "bg-transparent"} px-6 py-20`}>
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <span className={`font-mono text-[11px] tracking-widest uppercase px-3 py-1 rounded-md text-accent bg-bg-semi-trans
                    border border-accent/30`}>
                        Skills
                    </span>
                    <div className={`flex-1 h-px bg-accent`} />
                    <span className="font-mono text-[11px] text-accent">
                        {String(SKILLS.length).padStart(2, "0")} technologies
                    </span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
                    {SKILLS.map((skill, i) => (
                        <RevealOnScroll
                            key={skill.id}
                            delay={i*200}>
                            <div
                                className={`relative group rounded-xl border p-5 transition-all duration-150 hover:-translate-y-0.5
                ${dark
                                        ? "bg-gray-900 border-gray-800 hover:border-gray-600"
                                        : "bg-white border-gray-200 hover:border-gray-400"}`}
                            >
                                {/* Index badge */}
                                <span className="absolute top-3 right-3 font-mono text-[10px] text-gray-400 opacity-50">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                {/* Logo */}
                                <div className={`w-15 h-15 rounded-lg flex items-center justify-center mb-4
                ${dark ? "bg-gray-800" : "bg-gray-50"}`}>
                                    <img
                                        src={`./logos/${skill.path}`}
                                        alt={`${skill.tech} logo`}
                                        className="w-10 h-10 object-contain shrink-0"
                                    />
                                </div>

                                {/* Name */}
                                <p className={`text-xl font-semibold mb-1.5 ${dark ? "text-gray-100" : "text-gray-900"}`}>
                                    {skill.tech}
                                </p>

                                {/* Description */}
                                <p className={`text-xs leading-relaxed ${dark ? "text-gray-400" : "text-gray-500"}`}>
                                    {skill.desc}
                                </p>

                                {/* Tag */}
                                <span className={`inline-block mt-3 font-mono text-[10px] px-2 py-0.5 rounded-full border
                ${dark ? "bg-transparent text-gray-500 border-gray-700" : TAG_STYLES[skill.tag]}`}>
                                    {skill.tag}
                                </span>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    )
}