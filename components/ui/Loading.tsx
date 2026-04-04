"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type LoadingType = {
    isLoading: boolean;
}

export default function Loading({
    isLoading
}: LoadingType) {

    return (
        <div id="loading-wrapper" className={`${isLoading ? "flex":"hidden"} fixed inset-0 z-50 items-center justify-center bg-black/60 backdrop-blur-md`}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative w-80 rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-xl border border-white/20"
            >
                {/* Gradient Glow */}
                <div className="absolute-inset-[1px] rounded-2xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-xl"></div>

                <div className="relative flex flex-col items-center gap-6">
                    {/* Animated Spinner */}
                    <div className="relative h-14 w-14">
                        <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
                        <motion.div
                            className="absolute inset-0 rounded-full border-4 border-t-indigo-500"
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                ease: "linear",
                            }}
                        />
                    </div>

                    {/* Text */}
                    <div className="text-center">
                        <p className="text-lg font-semibold text-white tracking-wide">
                            Sending...
                        </p>
                        <p className="text-m text-white/60">
                            Sending Your Message
                        </p>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-linear-to-r from-indigo-500 to-purple-500"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}