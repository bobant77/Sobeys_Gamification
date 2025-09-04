"use client"

import React, { useState, useRef } from 'react';
import { motion, useInView, useMotionValue } from 'framer-motion';

import { Gift, Trophy, Star, Crown, Coins } from 'lucide-react';

const PrizesSection = ({ id = "faq" }: { id?: string }) => {
    const [hoveredPrize, setHoveredPrize] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);



    const prizes = [
        {
            id: 1,
            title: "Million Dollar",
            subtitle: "Grand Prize",
            value: "$10,000",
            quantity: "4 prizes",
            icon: Crown,
            gradient: "from-yellow-400 via-amber-500 to-orange-600",
            glowColor: "shadow-yellow-500/50",
            //   bgPattern: "radial-gradient(circle at 30% 20%, rgba(255,215,0,0.3) 0%, transparent 50%)",
            description: "Ultimate grand prize experience"
        },
        {
            id: 2,
            title: "Investment",
            subtitle: "Cash Prize",
            value: "$5,000",
            quantity: "2 prizes",
            icon: Coins,
            gradient: "from-emerald-400 via-teal-500 to-cyan-600",
            glowColor: "shadow-emerald-500/50",
            //   bgPattern: "radial-gradient(circle at 70% 30%, rgba(16,185,129,0.3) 0%, transparent 50%)",
            description: "Boost your financial future"
        },
        {
            id: 3,
            title: "CineClub",
            subtitle: "Membership",
            value: "$110",
            quantity: "100 prizes",
            icon: Star,
            gradient: "from-purple-400 via-violet-500 to-indigo-600",
            glowColor: "shadow-purple-500/50",
            //   bgPattern: "radial-gradient(circle at 50% 80%, rgba(139,92,246,0.3) 0%, transparent 50%)",
            description: "Premium entertainment access"
        },
        {
            id: 4,
            title: "Home Hardware",
            subtitle: "Gift Card",
            value: "$1,000",
            quantity: "10 prizes",
            icon: Gift,
            gradient: "from-pink-400 via-rose-500 to-red-600",
            glowColor: "shadow-pink-500/50",
            //   bgPattern: "radial-gradient(circle at 20% 70%, rgba(236,72,153,0.3) 0%, transparent 50%)",
            description: "Transform your living space"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            rotateX: -15,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 100,
                duration: 0.8
            }
        }
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set(event.clientX - centerX);
        mouseY.set(event.clientY - centerY);
    };

    return (
        <section
            ref={sectionRef}
            id={id}
            className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50/50 to-orange-50/30 py-6 sm:py-8 lg:py-16
     relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl "
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-10 sm:mb-8 lg:mb-10 px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-gray-900 via-green-900 to-emerald-900 bg-clip-text text-transparent">
                            What can you
                        </span>
                        {" "}
                        <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                            win?
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        From cash rewards to premium experiences - your next win is just a play away.
                        Discover incredible prizes and exclusive offers waiting for you.
                    </motion.p>
                </motion.div>

                {/* Prizes Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {prizes.map((prize, index) => {
                        const IconComponent = prize.icon;
                        return (
                            <motion.div
                                key={prize.id}
                                className="group relative"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    z: 50
                                }}
                                onHoverStart={() => setHoveredPrize(prize.id)}
                                onHoverEnd={() => setHoveredPrize(null)}
                            >
                                <div className="relative h-full">
                                    {/* Glow Effect */}
                                    <motion.div
                                        className={`absolute -inset-1 bg-gradient-to-r ${prize.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                                        animate={hoveredPrize === prize.id ? {
                                            scale: [1, 1.1, 1],
                                            opacity: [0.3, 0.5, 0.3]
                                        } : {}}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />

                                    {/* Main Card */}
                                    <div
                                        className="relative bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 h-full border border-white/20 shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl"
                                        style={{
                                            //   backgroundImage: prize.bgPattern,
                                            minHeight: 'clamp(280px, 35vw, 400px)'
                                        }}
                                    >
                                        {/* Floating Elements */}
                                        <motion.div
                                            className="absolute top-4 right-4 opacity-10"
                                            animate={{
                                                rotate: [0, 360],
                                                scale: [1, 1.1, 1]
                                            }}
                                            transition={{
                                                duration: 8,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        >
                                            <Trophy className="w-8 h-8 sm:w-12 sm:h-12" />
                                        </motion.div>

                                        {/* Icon Container */}
                                        <motion.div
                                            className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${prize.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden group-hover:shadow-lg ${prize.glowColor}`}
                                            whileHover={{
                                                rotate: [0, -10, 10, 0],
                                                scale: 1.1
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                                            <motion.div
                                                className="absolute inset-0 bg-white/20 rounded-full"
                                                animate={{
                                                    scale: [1, 2, 1],
                                                    opacity: [0, 0.5, 0]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.2
                                                }}
                                            />
                                        </motion.div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <motion.div
                                                className="mb-2 sm:mb-3"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                            >
                                                <div className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r ${prize.gradient} text-white shadow-sm`}>
                                                    {prize.quantity}
                                                </div>
                                            </motion.div>

                                            <motion.h3
                                                className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                                transition={{ delay: 0.6 + index * 0.1 }}
                                            >
                                                {prize.title}
                                            </motion.h3>

                                            <motion.p
                                                className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                                transition={{ delay: 0.7 + index * 0.1 }}
                                            >
                                                {prize.subtitle}
                                            </motion.p>

                                            <motion.div
                                                className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent mb-2 sm:mb-3`}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                                            >
                                                {prize.value}
                                            </motion.div>

                                            <motion.p
                                                className="text-xs sm:text-sm text-gray-500 leading-relaxed"
                                                initial={{ opacity: 0 }}
                                                animate={isInView ? { opacity: 1 } : {}}
                                                transition={{ delay: 0.9 + index * 0.1 }}
                                            >
                                                {prize.description}
                                            </motion.p>
                                        </div>

                                        {/* Hover Overlay */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"
                                            initial={false}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default PrizesSection;