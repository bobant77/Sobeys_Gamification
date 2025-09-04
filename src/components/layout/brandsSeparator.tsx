"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const BrandsSeparatorSection = ({ id = "brands" }: { id?: string }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const brands = [
        {
            name: 'Sobeys',
            logo: '/sobeys.svg',
            color: 'from-green-500 to-emerald-600',
            textColor: "text-green-600",
        },
        {
            name: 'Safeway',
            logo: '/safeway.svg',
            color: 'from-red-500 to-red-600',
            textColor: "text-white",
        },
        {
            name: 'Foodland',
            logo: '/logo.svg',
            color: 'from-orange-500 to-red-500',
            textColor: "text-red-600",
        },
        {
            name: 'FreshCo',
            logo: '/freshco.svg',
            color: 'from-green-400 to-lime-500',
            textColor: "text-yellow-600",
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 120,
                damping: 15,
                duration: 0.6
            }
        }
    };

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const,
            }
        }
    };

    return (
        <section id={id} className="relative w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 md:py-16 overflow-hidden">
            {/* Simplified Background Pattern */}
            <div className="absolute inset-0">
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Geometric Shapes */}
                <motion.div
                    className="absolute top-16 left-8 w-20 h-20 border border-green-500/20 rounded-lg rotate-45"
                    animate={{
                        rotate: [45, 225, 45],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-16 right-12 w-16 h-16 border-2 border-blue-500/20 rounded-full"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                <motion.div
                    className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rotate-12"
                    animate={{
                        rotate: [12, 192, 12],
                        y: [-10, 10, -10]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Floating Lines */}
                <motion.div
                    className="absolute top-20 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"
                    animate={{
                        scaleX: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-24 left-1/3 w-24 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rotate-45"
                    animate={{
                        scaleX: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                    }}
                />

                {/* Floating Colored Circles */}
                {/* Green Circles */}
                <motion.div
                    className="absolute top-20 left-12 w-3 h-3 bg-green-400 rounded-full"
                    animate={{
                        y: [-15, 15, -15],
                        x: [-5, 5, -5],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-32 right-16 w-2 h-2 bg-green-500 rounded-full"
                    animate={{
                        y: [-20, 20, -20],
                        x: [10, -10, 10],
                        opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-8 w-4 h-4 bg-green-300 rounded-full"
                    animate={{
                        y: [20, -20, 20],
                        opacity: [0.5, 0.9, 0.5],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* White Circles */}
                <motion.div
                    className="absolute top-16 right-20 w-2.5 h-2.5 bg-white rounded-full"
                    animate={{
                        y: [10, -10, 10],
                        x: [-8, 8, -8],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-1/4 w-3.5 h-3.5 bg-white/80 rounded-full"
                    animate={{
                        y: [-12, 12, -12],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [0.8, 1.1, 0.8]
                    }}
                    transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                    }}
                />
                <motion.div
                    className="absolute top-2/3 right-12 w-2 h-2 bg-gray-200 rounded-full"
                    animate={{
                        x: [15, -15, 15],
                        y: [-8, 8, -8],
                        opacity: [0.5, 0.9, 0.5]
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2.5
                    }}
                />

                {/* Red Circles */}
                <motion.div
                    className="absolute top-40 left-1/3 w-3 h-3 bg-red-400 rounded-full"
                    animate={{
                        y: [18, -18, 18],
                        x: [12, -12, 12],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                        duration: 4.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.8
                    }}
                />
                <motion.div
                    className="absolute bottom-16 right-1/3 w-2.5 h-2.5 bg-red-500 rounded-full"
                    animate={{
                        y: [-16, 16, -16],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{
                        duration: 5.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.8
                    }}
                />
                <motion.div
                    className="absolute top-24 right-8 w-2 h-2 bg-red-300 rounded-full"
                    animate={{
                        x: [-10, 10, -10],
                        y: [8, -8, 8],
                        opacity: [0.5, 0.9, 0.5]
                    }}
                    transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2.8
                    }}
                />

                {/* Yellow Circles */}
                <motion.div
                    className="absolute top-28 left-2/3 w-3.5 h-3.5 bg-yellow-400 rounded-full"
                    animate={{
                        y: [-14, 14, -14],
                        x: [-6, 6, -6],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                        duration: 4.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.2
                    }}
                />
                <motion.div
                    className="absolute bottom-28 left-16 w-2.5 h-2.5 bg-yellow-500 rounded-full"
                    animate={{
                        y: [22, -22, 22],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [0.9, 1.2, 0.9]
                    }}
                    transition={{
                        duration: 5.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2.2
                    }}
                />
                <motion.div
                    className="absolute top-3/4 right-1/4 w-2 h-2 bg-yellow-300 rounded-full"
                    animate={{
                        x: [14, -14, 14],
                        y: [-10, 10, -10],
                        opacity: [0.5, 0.9, 0.5]
                    }}
                    transition={{
                        duration: 4.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3.2
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={textVariants}
                    className="text-center mb-8 md:mb-12"
                >
                    <motion.p
                        className="text-white text-sm md:text-base font-medium mb-3 tracking-wider uppercase"
                        variants={textVariants}
                    >
                        Grocery Giveaways is available at Our Partner Stores
                    </motion.p>


                    <motion.div
                        className="w-30 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full"
                        variants={textVariants}
                    />
                </motion.div>

                {/* Brand Logos Grid */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {brands.map((brand, index) => (
                        <motion.div
                            key={brand.name}
                            variants={itemVariants}
                            className="group relative"
                            whileHover={{
                                scale: 1.02,
                                y: -4
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25
                            }}
                        >
                            {/* Background Glow */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-15 blur-xl rounded-2xl transition-all duration-300`}
                                whileHover={{
                                    scale: 1.1,
                                    opacity: 0.2
                                }}
                            />

                            {/* Card Container */}
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 transition-all duration-300 group-hover:bg-white/8 group-hover:border-white/20">
                                {/* Logo Container */}
                                <div className="relative flex items-center justify-center h-16 md:h-20">
                                    <motion.div
                                        className="relative"
                                        whileHover={{
                                            scale: 1.05
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src={brand.logo}
                                            alt={`${brand.name} Logo`}
                                            width={100}
                                            height={50}
                                            className="max-w-full max-h-full object-contain filter drop-shadow-md transition-all duration-300 group-hover:drop-shadow-lg group-hover:brightness-110"
                                            priority
                                        />
                                    </motion.div>
                                </div>

                                {/* Brand Name */}
                                <motion.p
                                    className={`text-center ${brand?.textColor} font-medium text-xs md:text-sm mt-3 group-hover:text-white/90 transition-colors duration-300`}
                                    whileHover={{
                                        scale: 1.02
                                    }}
                                >
                                    {brand.name}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Decorative Line */}
                <motion.div
                    className="flex justify-center mt-8 md:mt-12"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default BrandsSeparatorSection;