import { context } from "@/app/page"
import { ContextValues } from "@/types/ContextValues"
import Link from "next/link";
import { useContext } from "react"
import { Button } from "../ui/Button";
import { revealSection } from "@/utils/revealSection";

const sections = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

const socials = [
    {
        href: "https://github.com/CodeWithBry/",
        icon: "fab fa-github-square",
        label: "GitHub",
        lightClass: "text-bg-dark hover:text-accent",
        darkClass: "text-content-primary hover:text-accent",
    },
    {
        href: "https://web.facebook.com/bryan.agustin.521023",
        icon: "fab fa-facebook-square",
        label: "Facebook",
        lightClass: "text-blue-600 hover:text-blue-500",
        darkClass: "text-blue-400 hover:text-blue-300",
    },
    {
        href: "https://www.instagram.com/bryan__agustin/",
        icon: "fab fa-instagram",
        label: "Instagram",
        lightClass: "text-pink-600 hover:text-pink-500",
        darkClass: "text-pink-500 hover:text-pink-400",
    },
];

function Footer() {
    const { themePreference } = useContext(context) as ContextValues;
    const isLightMode = themePreference === "light";

    return (
        <footer
            className={`
                ${isLightMode ? "bg-bg-light text-bg-dark border-gray-200" : "bg-bg-dark text-content-primary border-bg-border"}
                w-full border-t font-sans
            `}
        >
            {/* Main footer content */}
            <div className="max-w-330 mx-auto px-5 pt-10 pb-6">
                <div className="flex flex-col sm:flex-row justify-between gap-10">

                    {/* Branding / left */}
                    <div className="flex flex-col gap-2 max-w-xs">
                        <p className={`text-2xl font-bold text-gradient`}>
                            CodeWithBry
                        </p>
                        <p className="text-m leading-relaxed font-semibold">
                            <span className="">Github Code Repo: </span>
                            <Link
                                className="text-gray-500 hover:text-accent-hover underline"
                                href={"https://github.com/CodeWithBry/CodeWithBry"}>
                                CodeWithBry-Portfolio
                            </Link>
                        </p>
                        <p className={`text-m leading-relaxed font-semibold ${isLightMode ? "text-gray-500" : "text-content-secondary"}`}>
                            Designed and Developed by Bryan Pajarillaga
                        </p>
                    </div>

                    {/* Navigation sections */}
                    <div className="flex flex-col gap-3">
                        <p className={`text-sm font-semibold uppercase tracking-widest ${isLightMode ? "text-gray-400" : "text-content-secondary"}`}>
                            Sections
                        </p>
                        <ul className="flex flex-col gap-2">
                            {sections.map((section) => (
                                <li key={section.label}>
                                    <Button
                                        onClick={() => revealSection(section.label.toLocaleLowerCase())}
                                        className={`
                                            text-m transition-colors duration-200
                                            ${isLightMode
                                                ? "text-gray-500 hover:text-accent"
                                                : "text-content-secondary hover:text-accent"
                                            }
                                        `}
                                    >
                                        {section.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-3">
                        <p className={`text-sm font-semibold uppercase tracking-widest ${isLightMode ? "text-gray-400" : "text-content-secondary"}`}>
                            Connect
                        </p>
                        <ul className="flex flex-row sm:flex-col gap-4">
                            {socials.map((social) => (
                                <li key={social.label}>
                                    <Link
                                        href={social.href}
                                        aria-label={social.label}
                                        className={`
                                            flex items-center gap-2 text-m transition-colors duration-200
                                            ${isLightMode ? social.lightClass : social.darkClass}
                                        `}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className={`${social.icon} text-xl`} />
                                        <span>{social.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className={`mt-8 mb-4 border-t ${isLightMode ? "border-gray-200" : "border-bg-border"}`} />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                    <p className={`text-m ${isLightMode ? "text-gray-400" : "text-content-secondary"}`}>
                        Copyright © 2026 Bryan Pajarillaga. All rights reserved.
                    </p>
                    <p className={`text-m ${isLightMode ? "text-gray-400" : "text-content-secondary"}`}>
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;