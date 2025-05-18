import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { TextFade } from "./TextFade";
import dollarAnimation from "@/public/dollar.json";

export function ContainerContent() {
    return (
        <div className="section-2 h-[90%] gap-[1rem] flex items-center justify-center bg-black">
            <div className="container-1 h-[60%] w-[47%] flex items-center justify-center">
                <Lottie
                    animationData={dollarAnimation}
                    loop={true}
                    className="w-full h-full "
                />
            </div>

            <div className="container-2 h-[80%] w-[47%]  ">
                <TextFade
                    direction="up"
                    staggerChildren={0.1}
                    className="h-[100%] w-[100%] flex-col p-[2rem] text-[20px] items-center justify-cener"
                >
                    <motion.div
                        className="w-fit mb-[1rem]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="inline-flex  px-4 py-2 rounded-full bg-gray-800 border border-gray-700 shadow-lg shadow-blue-500/20 ">
                            <span className="text-gray-200 uppercase text-sm font-semibold tracking-wide">
                                What is FXology?
                            </span>
                        </div>
                    </motion.div>
                    {/* Add your content here */}
                    <div className="mb-[1rem]">
                        <span className="text-[2rem]">Trade on forex and other</span>
                        <span className="text-[2rem]">market in capital</span>
                        <span className="text-[2rem]">upto 640,000 USD!</span>
                    </div>

                    <div className="mb-[1rem]">
                        <span>We provide unique trading programs for Forex traders, based </span>
                        <span>upon which we search for the best options to work together with.</span>
                        <span>We provide you with Training accounts that you can use to trade</span>
                        <span>and earn commission without the risk of losing your own funds!</span>
                    </div>

                    <div className="">
                        <span>You are presented with a choice of the widest variety of</span>
                        <span>training programs on the market - it is up to you to choose</span>
                        <span>based on your experience and preference. Whether you are a </span>
                        <span>rookie, advanced or experienced trader, we are certain</span>
                        <span>that you will find the most perfectly suited progrma</span>
                    </div>
                </TextFade>
            </div>
        </div>
    )
}
