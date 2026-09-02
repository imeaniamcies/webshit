"use client";

import { Icons } from "@/components/global/icons";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface Props {
    href: string;
}

const Cta = ({ href }: Props) => {
    return (
        <section className="w-full py-16 lg:pt-24 relative overflow-hidden">
            <MaxWidthWrapper>
                <div className="relative max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-visible z-0"
                    >
                        <div
                            className="absolute inset-0 -z-20"
                            style={{
                                backgroundImage: `
                                    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
                                `,
                                backgroundSize: "48px 48px",
                            }}
                        />

                        <div
                            className="absolute inset-0 -z-10 bg-background"
                            style={{
                                maskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 40%, white 70%)",
                                WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 40%, white 70%)",
                            }}
                        />

                        <motion.div
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-3/4 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-[6rem]"
                        />

                        <div className="relative z-40 flex flex-col items-center text-center py-16 lg:py-20 px-6">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                                className="relative mt-0 cursor-pointer"
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-violet-500/40 to-fuchsia-500/40 rounded-2xl blur-2xl"
                                />
                                <Icons.logo className="relative h-14 w-14" />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-medium font-heading bg-gradient-to-r from-foreground to-foreground/70 text-transparent bg-clip-text leading-[1.2] mt-8 max-w-3xl"
                            >
                                Step into the future
                                <br />
                                of link management
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-base md:text-lg text-muted-foreground mt-6 max-w-2xl"
                            >
                                Experience the cutting-edge solution that transforms how you handle your links.
                                <br className="hidden md:block" />
                                Elevate your online presence with our next-gen platform.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="mt-6"
                            >
                                <Button asChild size="lg" className="text-base">
                                    <Link href={href} className="flex items-center">
                                        Get started for free
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Cta;
