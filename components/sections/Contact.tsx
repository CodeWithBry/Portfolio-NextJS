"use client";

import { context } from "@/app/page";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { ContextValues } from "@/types/ContextValues";
import { FormEvent, useContext, useState } from "react";
import RevealOnScroll from "../ui/AnimationContainer";
import Loading from "../ui/Loading";
import Link from "next/link";

function Contact() {
    const { themePreference } = useContext(context) as ContextValues;
    const isLightMode = themePreference === "light";
    const ref = useSectionObserver();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.firstName + formData.lastName,
                email: formData.email,
                message: formData.message,
            }),
        });

        const data = await res.json();

        if (data.success) {
            setSubmitted(true);
            setIsLoading(false);
        } 
    };

    const inputBase = `
        w-full px-4 py-2.5 rounded-s text-m font-sans outline-none border transition-all duration-200
        ${isLightMode
            ? "bg-white border-gray-300 text-bg-dark placeholder-gray-400 focus:border-accent"
            : "bg-bg border-bg-border text-content-primary placeholder-content-secondary focus:border-accent"
        }
    `;

    return (<>
        <Loading isLoading={isLoading} />
        <section
            ref={ref}
            id="contact"
            className={`
                w-full py-20 px-5 font-sans transition-colors duration-300
                ${isLightMode ? "bg-bg-light text-bg-dark" : "bg-bg text-content-primary"}
            `}
        >
            <div className="max-w-330 mx-auto">

                {/* Section heading */}
                <RevealOnScroll>
                    <div className="mb-12">
                        <h2 className={`text-4xl sm:text-5xl font-bold mb-1 `}>
                            <span className="text-gradient">Get in Touch</span>
                        </h2>
                        <span className={`block w-14 h-1 rounded-full mt-3 bg-accent`} />
                    </div>
                </RevealOnScroll>

                <div className="flex flex-col lg:flex-row gap-14">

                    {/* Left — info panel */}
                    <div className="flex flex-col justify-between gap-8 lg:max-w-xs w-full">
                        <RevealOnScroll delay={300}>
                            <p className={`text-base font-semibold mb-2 text-accent`}>
                                I'd like to hear from you!
                            </p>
                            <p className={`text-m leading-relaxed ${isLightMode ? "text-gray-500" : "text-content-secondary"}`}>
                                If you have any inquiries or just want to say hi, please use the contact form!
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={500}>
                            <div className="flex flex-col gap-4">
                                {/* Email */}
                                <Link
                                    href="mailto:bryan@example.com"
                                    className={`flex items-center gap-3 text-m transition-colors duration-200 ${isLightMode ? "text-gray-500 hover:text-accent" : "text-content-secondary hover:text-accent"}`}
                                >
                                    <i className="fas fa-envelope text-lg" />
                                    <span>bryanagustinpajarillaga@gmail.com</span>
                                </Link>

                                {/* Socials */}
                                <div className="flex items-center gap-3">
                                    {[
                                        { href: "https://github.com/CodeWithBry/", icon: "fab fa-github-square", label: "GitHub" },
                                        { href: "https://www.instagram.com/bryan__agustin/", icon: "fab fa-instagram", label: "Instagram" },
                                        { href: "https://web.facebook.com/bryan.agustin.521023", icon: "fab fa-facebook-square", label: "Facebook" },
                                    ].map((s) => (
                                        <Link
                                            key={s.label}
                                            href={s.href}
                                            aria-label={s.label}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-xl transition-colors duration-200 ${isLightMode ? "text-gray-400 hover:text-accent" : "text-content-secondary hover:text-accent"}`}
                                        >
                                            <i className={s.icon} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Right — form */}
                    <div className="flex-1">
                        <RevealOnScroll delay={700}>
                            {submitted ? (
                                <div className={`flex flex-col items-center justify-center h-full gap-4 py-16 rounded-4xl border ${isLightMode ? "border-gray-200 bg-white" : "border-bg-border bg-bg-dark"}`}>
                                    <i className="fas fa-check-circle text-4xl text-accent" />
                                    <p className={`text-base font-semibold ${isLightMode ? "text-bg-dark" : "text-content-primary"}`}>
                                        Message sent!
                                    </p>
                                    <p className={`text-m ${isLightMode ? "text-gray-400" : "text-content-secondary"}`}>
                                        I'll get back to you as soon as possible.
                                    </p>
                                    <button
                                        onClick={() => { setSubmitted(false); setFormData({ firstName: "", lastName: "", email: "", message: "" }); }}
                                        className="mt-2 text-m text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    {/* First / Last name row */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex flex-col gap-1.5 flex-1">
                                            <label className={`text-m ${isLightMode ? "text-gray-500" : "text-content-secondary"}`}>
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="Bryan"
                                                className={inputBase}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 flex-1">
                                            <label className={`text-m ${isLightMode ? "text-gray-500" : "text-content-secondary"}`}>
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Pajarillaga"
                                                className={inputBase}
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className={`text-m ${isLightMode ? "text-gray-500" : "text-content-secondary"}`}>
                                            Email <span className="text-accent">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            required
                                            className={inputBase}
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className={`text-m ${isLightMode ? "text-gray-500" : "text-content-secondary"}`}>
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="What's on your mind?"
                                            rows={5}
                                            className={`${inputBase} resize-none`}
                                        />
                                    </div>

                                    {/* Submit */}
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="px-8 py-2.5 rounded-s bg-accent hover:bg-accent-hover text-white text-m font-semibold transition-colors duration-200 cursor-pointer"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </form>
                            )}
                        </RevealOnScroll>
                    </div>

                </div>
            </div>
        </section>
    </>);
}

export default Contact;