'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView as useIntersectionObserver } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'
import { Play, Trophy, Gift, Zap, Star, Sparkles } from 'lucide-react'

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            damping: 25,
            stiffness: 120
        }
    }
}

const HeroSection = ({ id = "faq" }: { id?: string }) => {
    const [currentPrize, setCurrentPrize] = useState(0)
    const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, delay: number }>>([])
    const heroRef = useRef<HTMLElement>(null)

    const [ref, inView] = useIntersectionObserver({
        threshold: 0.1,
        triggerOnce: false
    })

    const prizes = ['$100K', '$250K', '$500K', '$1M']

    useEffect(() => {
        const prizeInterval = setInterval(() => {
            setCurrentPrize(prev => (prev + 1) % prizes.length)
        }, 2500)

        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 4
        }))
        setParticles(newParticles)

        return () => clearInterval(prizeInterval)
    }, [prizes.length])

    return (
        <motion.section
            ref={heroRef}
            id={id}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-green-900 pt-24 md:pt-28 lg:pt-20"
            // style={{
            //     background: `
            //         radial-gradient(ellipse at top left, rgba(0, 61, 42, 0.8) 0%, transparent 70%),
            //         radial-gradient(ellipse at top right, rgba(16, 185, 129, 0.3) 0%, transparent 70%),
            //         radial-gradient(ellipse at bottom, rgba(0, 61, 42, 0.6) 0%, transparent 70%),
            //         linear-gradient(135deg, #003d2a 0%, #064e3b 25%, #047857 50%, #059669 75%, #10b981 100%)
            //     `
            // }}
        >
            {/* Enhanced Background Elements */}
            <motion.div className="absolute inset-0">
                <motion.div
                    className="absolute top-8 left-8 w-16 h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: [0.25, 0.1, 0.25, 1]
                        }
                    }}
                />
                <motion.div
                    className="absolute top-24 right-16 w-12 h-12 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-30"
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 1, 0.7],
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: [0.25, 0.1, 0.25, 1]
                        }
                    }}
                />
                <motion.div
                    className="absolute bottom-16 left-1/4 w-18 h-18 lg:w-24 lg:h-24 2xl:w-28 2xl:h-28 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-25"
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 10, -10, 0],
                        scale: [1, 1.1, 0.9, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                />

                {/* Enhanced particles */}
                {particles.map(particle => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1.5 h-1.5 lg:w-2 lg:h-2 2xl:w-2.5 2xl:h-2.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60"
                        initial={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                    />
                ))}

                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InUybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
            </motion.div>

            <motion.div
                className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10 h-full flex items-center"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 items-center w-full">
                    {/* Left Side - Content (First on mobile) */}
                    <motion.div className="text-white space-y-6 2xl:space-y-8 order-1" variants={itemVariants}>
                        <motion.div className="space-y-3 2xl:space-y-4" variants={itemVariants}>
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-black leading-tight text-center lg:text-left"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 100
                                }}
                            >
                                <motion.span
                                    className="bg-white bg-clip-text text-transparent"
                                    animate={{
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{ backgroundSize: "200% 200%" }}
                                >
                                    GROCERY
                                </motion.span>
                                <br />
                                <motion.span
                                    className="text-white"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                >
                                    CHALLENGE
                                </motion.span>
                                <br />
                                <motion.span
                                    className="bg-white bg-clip-text text-transparent"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                >
                                    ARENA
                                </motion.span>
                            </motion.h1>

                            <motion.div
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-3 2xl:space-x-4"
                                variants={itemVariants}
                            >
                                <span className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-gray-300">Win up to</span>
                                <div className="relative">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentPrize}
                                            className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                                            initial={{ y: 20, opacity: 0, scale: 0.8 }}
                                            animate={{ y: 0, opacity: 1, scale: 1 }}
                                            exit={{ y: -20, opacity: 0, scale: 1.2 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20
                                            }}
                                        >
                                            {prizes[currentPrize]}
                                        </motion.span>
                                    </AnimatePresence>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-lg opacity-30"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.3, 0.6, 0.3]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                    />
                                </div>
                                <span className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-gray-300">in prizes!</span>
                            </motion.div>
                        </motion.div>

                        <motion.p
                            className="text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-300 leading-relaxed max-w-2xl text-center lg:text-left"
                            variants={itemVariants}
                        >
                            Complete weekly challenges, unlock exclusive rewards,
                            and compete for massive prizes
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 lg:gap-4 2xl:gap-5 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            <motion.button
                                className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 lg:px-8 lg:py-4 2xl:px-10 2xl:py-5 rounded-2xl font-bold text-base lg:text-lg 2xl:text-xl flex items-center justify-center space-x-3 overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />

                                <Play className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7" />

                                <span className="text-base lg:text-lg relative z-10">Start Playing</span>
                            </motion.button>
                            <motion.button
                                className="group relative bg-transparent border-2 border-green-800 text-white hover:text-orange px-6 py-3 lg:px-8 lg:py-4 2xl:px-10 2xl:py-5 rounded-2xl font-bold text-base lg:text-lg 2xl:text-xl overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-900"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />
                                <div className="flex items-center space-x-2 lg:space-x-3 2xl:space-x-4 relative z-10">
                                    <motion.div
                                        animate={{
                                            y: [0, -5, 0],
                                            rotateY: [0, 180, 360]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                    >
                                        <Trophy className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7" />
                                    </motion.div>
                                    <span>View Scorecard</span>
                                </div>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Enhanced Phone Mockup (Second on mobile) */}
                    <motion.div
                        className="relative lg:flex justify-center order-2 mt-6 lg:mt-0"
                        variants={itemVariants}
                    >
                        <Tilt
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={1000}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            <motion.div
                                className="relative z-10"
                                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.8,
                                    type: "spring",
                                    stiffness: 100
                                }}
                            >
                                <motion.div
                                    className="relative mx-auto w-64 h-[500px] lg:w-72 lg:h-[560px] xl:w-80 xl:h-[540px] 2xl:w-96 2xl:h-[720px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] lg:rounded-[3rem] p-1.5 lg:p-2 2xl:p-3 shadow-2xl"
                                    whileHover={{
                                        scale: 1.02,
                                        rotateY: 5,
                                        boxShadow: "0 40px 80px rgba(0, 0, 0, 0.3)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-full h-full bg-gradient-to-b from-green-50 to-green-100 rounded-[2rem] lg:rounded-[2.5rem] 2xl:rounded-[3rem] overflow-hidden relative">
                                        <motion.div
                                            className="p-4 lg:p-6 2xl:p-8 space-y-3 lg:space-y-4 2xl:space-y-6"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.2, duration: 0.5 }}
                                        >
                                            {/* Header */}
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-gray-900 font-bold text-base lg:text-lg 2xl:text-xl">This Week&apos;s Challenge</h3>
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        rotate: [0, 15, -15, 0]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: [0.25, 0.1, 0.25, 1]
                                                    }}
                                                >
                                                    <Zap className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 text-yellow-500" />
                                                </motion.div>
                                            </div>

                                            {/* Challenge Card */}
                                            <motion.div
                                                className="bg-white rounded-xl lg:rounded-2xl 2xl:rounded-3xl p-3 lg:p-4 2xl:p-5 shadow-lg"
                                                whileHover={{
                                                    scale: 1.02,
                                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="flex items-center justify-between mb-2 lg:mb-3 2xl:mb-4">
                                                    <span className="text-green-600 font-bold text-sm lg:text-base 2xl:text-lg">Level 3</span>
                                                    <motion.span
                                                        className="text-yellow-600 font-bold text-sm lg:text-base 2xl:text-lg"
                                                        animate={{
                                                            scale: [1, 1.1, 1]
                                                        }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                            ease: [0.25, 0.1, 0.25, 1]
                                                        }}
                                                    >
                                                        500 pts
                                                    </motion.span>
                                                </div>
                                                <h4 className="font-bold text-gray-900 mb-2 text-sm lg:text-base 2xl:text-lg">Buy 5 Organic Items</h4>
                                                <div className="bg-gray-200 rounded-full h-1.5 lg:h-2 2xl:h-2.5 mb-2 2xl:mb-3 overflow-hidden">
                                                    <motion.div
                                                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-1.5 lg:h-2 2xl:h-2.5 rounded-full"
                                                        initial={{ width: "0%" }}
                                                        animate={{ width: "60%" }}
                                                        transition={{
                                                            duration: 2,
                                                            delay: 1.5,
                                                            type: "spring",
                                                            stiffness: 100
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-xs lg:text-sm 2xl:text-base text-gray-600">3/5 completed</span>
                                            </motion.div>

                                            {/* Prize Card */}
                                            <motion.div
                                                className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl lg:rounded-2xl 2xl:rounded-3xl p-3 lg:p-4 2xl:p-5 text-white"
                                                whileHover={{
                                                    scale: 1.02,
                                                    boxShadow: "0 15px 35px rgba(168, 85, 247, 0.4)"
                                                }}
                                                animate={{
                                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                                }}
                                                transition={{
                                                    backgroundPosition: {
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    }
                                                }}
                                                style={{ backgroundSize: "200% 200%" }}
                                            >
                                                <div className="flex items-center space-x-2 2xl:space-x-3 mb-2 2xl:mb-3">
                                                    <motion.div
                                                        animate={{ rotate: [0, 15, -15, 0] }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: [0.25, 0.1, 0.25, 1]
                                                        }}
                                                    >
                                                        <Trophy className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6" />
                                                    </motion.div>
                                                    <span className="font-bold text-sm lg:text-base 2xl:text-lg">Weekly Prize</span>
                                                </div>
                                                <motion.div
                                                    className="text-xl lg:text-2xl 2xl:text-3xl font-black"
                                                    animate={{
                                                        scale: [1, 1.05, 1]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: [0.25, 0.1, 0.25, 1]
                                                    }}
                                                >
                                                    $1,000
                                                </motion.div>
                                                <div className="text-purple-100 text-xs lg:text-sm 2xl:text-base">Gift Card</div>
                                            </motion.div>
                                        </motion.div>

                                        <motion.div
                                            className="absolute top-16 lg:top-20 2xl:top-24 -right-3 lg:-right-4 2xl:-right-5 bg-green-500 text-white px-2 py-1 lg:px-3 lg:py-2 2xl:px-4 2xl:py-2 rounded-full text-xs lg:text-sm 2xl:text-base font-bold"
                                            animate={{
                                                y: [0, -5, 0],
                                                scale: [1, 1.1, 1],
                                                rotate: [0, 5, -5, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: [0.25, 0.1, 0.25, 1]
                                            }}
                                        >
                                            New Challenge!
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Background Phone with enhanced animation */}
                                <motion.div
                                    className="absolute top-8 lg:top-12 2xl:top-16 -left-12 lg:-left-16 2xl:-left-20 w-52 h-[400px] lg:w-64 lg:h-[500px] 2xl:w-80 2xl:h-[600px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-[2rem] lg:rounded-[2.5rem] 2xl:rounded-[3rem] p-1.5 lg:p-2 2xl:p-3 shadow-xl opacity-40"
                                    animate={{
                                        scale: 0.9,
                                        rotateZ: -12,
                                        rotateY: [-12, -8, -12],
                                        rotateX: [0, 2, 0]
                                    }}
                                    transition={{
                                        scale: { duration: 0 }, // Instant scale
                                        rotateZ: { duration: 0 }, // Instant rotation
                                        rotateY: {
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        },
                                        rotateX: {
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }
                                    }}
                                    style={{
                                        transformOrigin: 'center center'
                                    }}
                                >
                                    <div className="w-full h-full bg-gradient-to-b from-blue-50 to-blue-100 rounded-[1.5rem] lg:rounded-[2rem] 2xl:rounded-[2.5rem]" />
                                </motion.div>
                            </motion.div>
                        </Tilt>

                        {/* Enhanced Floating Icons */}
                        <motion.div
                            className="absolute top-0 right-0"
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >
                            <div className="w-12 h-12 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                >
                                    <Gift className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 text-white" />
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-8 lg:bottom-10 2xl:bottom-12 -left-8 lg:-left-10 2xl:-left-12"
                            animate={{
                                y: [0, -15, 0],
                                x: [0, 5, -5, 0],
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >
                            <div className="w-10 h-10 lg:w-12 lg:h-12 2xl:w-14 2xl:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                                <Star className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 text-white" />
                            </div>
                        </motion.div>

                        {/* Additional floating sparkles */}
                        <motion.div
                            className="absolute top-1/3 left-1/2"
                            animate={{
                                y: [0, -30, 0],
                                x: [0, 20, -20, 0],
                                opacity: [0.6, 1, 0.6],
                                scale: [1, 1.3, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: [0.25, 0.1, 0.25, 1],
                                delay: 1
                            }}
                        >
                            <div className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                        scale: [0.8, 1.2, 0.8]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: [0.25, 0.1, 0.25, 1]
                                    }}
                                >
                                    <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 text-white" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Custom CSS for enhanced animations */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                
                .shimmer {
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.2),
                        transparent
                    );
                    background-size: 200% 100%;
                    animation: shimmer 2s infinite;
                }
                
                /* Enhanced responsive adjustments */
                @media (min-width: 1536px) {
                    .container-custom {
                        max-width: 90rem;
                    }
                }
                
                @media (min-width: 1920px) {
                    .container-custom {
                        max-width: 100rem;
                    }
                }
                
                /* Custom gradient animations */
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .gradient-animate {
                    background-size: 200% 200%;
                    animation: gradient-shift 3s ease infinite;
                }
            `}</style>
        </motion.section>
    )
}

export default HeroSection