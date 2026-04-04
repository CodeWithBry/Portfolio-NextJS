import { context } from "@/app/page"
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { ContextValues } from "@/types/ContextValues";
import { useContext } from "react"
import RevealOnScroll from "../ui/AnimationContainer";

function AboutMe() {
    const { themePreference } = useContext(context) as ContextValues;
    const ref = useSectionObserver();
    const isLightMode = themePreference == "light"
    return (
        <section ref={ref} id="about" className={`${isLightMode ? "bg-transparent" : "bg-bg-dark"} py-15`}>
            <div className="h-auto pt-21 mx-auto max-w-330 lg:grid lg:grid-cols-2 flex flex-col-reverse">
                {/* Left */}
                <RevealOnScroll>
                    <div className="h-auto bg-transparent flex-col mx-10 lg:ml-20">
                        <span className="flex text-accent bg-bg-semi-trans border-2 border-bg-semi-trans border-solid w-fit mt-5 mb-1 py-0.5 px-3 text-m font-bold rounded-3xl font-sans">About Me</span>
                        <h1 className="text-3xl font-bold text-content-secondary my-3 sm:text-5xl"><span className="text-c">Know more</span> <span className="text-gradient">About Me</span></h1>
                        <p className={`${isLightMode ? "text-content-secondary" : "text-content-primary"} font-medium mb-5 text-[20] sm:text-xl`}>
                            Hi! I am <span className="text-accent">Bryan Pajarillaga</span> from <span className="text-accent">Bulacan, Philippines</span>.
                            Currently, I'm a Senior High School graduate in <span className="text-accent">Dr. Yanga's College, Inc. </span> Practicing my Tech Stack Skills as a Web Developer, as well as learning Kali Linux and Networking.
                        </p>
                        <p className={`${isLightMode ? "text-content-secondary" : "text-content-primary"} font-medium mb-5 text-[20] sm:text-xl`}>
                            Aside of my technical skills, I love engaging in activities that keeps me <span className="text-accent">inspired and creative</span>:
                        </p>

                        <ul className="ml-2">
                            <li className={isLightMode ? "text-gray-700 font-bold" : "text-gray-200"}> <i className="fa fa-hand-o-right mx-2"></i> Attending church services </li>
                            <li className={isLightMode ? "text-gray-700 font-bold" : "text-gray-200"}> <i className="fa fa-hand-o-right mx-2"></i> Bonding with my loved one, families and friends. </li>
                            <li className={isLightMode ? "text-gray-700 font-bold" : "text-gray-200"}> <i className="fa fa-hand-o-right mx-2"></i> Playing games </li>
                        </ul>
                    </div>
                </RevealOnScroll>
                {/* Right */}
                <RevealOnScroll delay={300}>
                    <img src="./programming.png" alt="developer-picture" className={`${themePreference == "light" ? "drop-shadow-picture" : "drop-shadow-dark-picture"} w-[90%] sm:w-full mx-auto drop-shadow-picture mb-5`} />
                </RevealOnScroll>
            </div>
        </section>
    )
}

export default AboutMe