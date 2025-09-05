'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView as useIntersectionObserver } from 'react-intersection-observer'
import { Download, UserPlus, ShoppingCart, Gift, Star, Play, Sparkles, Zap } from 'lucide-react'

const steps = [
    {
        id: 1,
        title: "Download",
        description: "Get the app & sign up instantly",
        icon: Download,
        gradient: "from-blue-500 to-indigo-600",
        hoverGradient: "from-blue-400 to-indigo-500"
    },
    {
        id: 2,
        title: "Connect",
        description: "Link your loyalty card securely",
        icon: UserPlus,
        gradient: "from-purple-500 to-pink-600",
        hoverGradient: "from-purple-400 to-pink-500"
    },
    {
        id: 3,
        title: "Win Big",
        description: "Shop & earn incredible rewards",
        icon: ShoppingCart,
        gradient: "from-green-500 to-emerald-600",
        hoverGradient: "from-green-400 to-emerald-500"
    }
]

const stores = [
    { 
        name: 'Sobeys', 
        gradient: 'from-green-500 to-emerald-600',
        logo: '/sobeys.svg',
        bgColor: 'bg-green-600',
        textColor: 'text-white'
    },
    { 
        name: 'Safeway', 
        gradient: 'from-red-500 to-red-600',
        logo: '/safeway.svg',
        bgColor: 'bg-red-600',
        textColor: 'text-white'
    },
    { 
        name: 'Foodland', 
        gradient: 'from-orange-500 to-amber-600',
        logo: '/logo.svg',
        bgColor: 'bg-white',
        textColor: 'text-red-600'
    },
    { 
        name: 'FreshCo', 
        gradient: 'from-yellow-400 to-yellow-500',
        logo: '/freshco.svg',
        bgColor: 'bg-yellow-400',
        textColor: 'text-black'
    }
]

const HowToPlaySection =({ id = "faq" }: { id?: string })=> {
    const [ref, inView] = useIntersectionObserver({
        threshold: 0.2,
        triggerOnce: true
    })

    const [hoveredStep, setHoveredStep] = useState<number | null>(null)
    const [particlePositions, setParticlePositions] = useState<Array<{left: string, top: string}>>([])

    useEffect(() => {
    const positions = Array.from({ length: 15 }, () => ({
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
    }))
    setParticlePositions(positions)
}, [])

    return (
        <section 
           className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden py-8 px-4"
            ref={ref}
            id={id}
        >
            {/* Enhanced background elements */}
            <div className="absolute inset-0">
                {/* Animated gradient orbs */}
                <motion.div 
                    className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"
                    animate={{ 
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-green-200/40 to-emerald-200/40 rounded-full blur-3xl"
                    animate={{ 
                        x: [0, -80, 0],
                        y: [0, 40, 0],
                        scale: [1, 0.8, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"
                    animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
            </div>

            {/* Floating particles */}
            {particlePositions?.map((position, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-300/60 to-blue-300/60"
                    style={{
                         left: position.left,
            top: position.top,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.sin(i) * 10, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 6 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut"
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Responsive layout: stacks on mobile, side by side on larger screens */}
                <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 xl:gap-16 items-center justify-center min-h-[85vh] max-h-screen">
                    
                    {/* Left Side - Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="w-full xl:w-2/5 max-w-md xl:max-w-none"
                    >
                        {/* Header */}
                        <div className="mb-6 lg:mb-8 text-center xl:text-left">
                            <motion.div
                                className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200/50 rounded-full px-4 py-2 mb-4 shadow-sm"
                                animate={{
                                    boxShadow: [
                                        "0 2px 10px rgba(34, 197, 94, 0.1)",
                                        "0 4px 20px rgba(34, 197, 94, 0.2)",
                                        "0 2px 10px rgba(34, 197, 94, 0.1)"
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                >
                                    <Sparkles className="w-4 h-4 mr-2 text-green-600" />
                                </motion.div>
                                <span className="text-sm font-bold text-green-700">3 Simple Steps</span>
                            </motion.div>
                            
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-black text-gray-900 mb-3 lg:mb-4 leading-tight">
                                How to{' '}
                                <motion.span 
                                    className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent"
                                    animate={{
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{ backgroundSize: "200% 200%" }}
                                >
                                    Play & Win
                                </motion.span>
                            </h2>
                            
                            <p className="text-base lg:text-lg xl:text-base 2xl:text-lg text-gray-600 font-medium">
                                Turn grocery shopping into an exciting{' '}
                                <span className="text-emerald-600 font-bold">winning adventure</span>
                            </p>
                        </div>

                        {/* Steps */}
                        <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                            {steps.map((step, index) => {
                                const Icon = step.icon
                                const isHovered = hoveredStep === step.id
                                
                                return (
                                    <motion.div
                                        key={step.id}
                                        className="relative group cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        onHoverStart={() => setHoveredStep(step.id)}
                                        onHoverEnd={() => setHoveredStep(null)}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                    >
                                        <div className="flex items-center p-4 lg:p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 relative overflow-hidden">
                                            
                                            {/* Hover background effect */}
                                            <motion.div
                                                className={`absolute inset-0 bg-gradient-to-r ${step.hoverGradient} opacity-0`}
                                                animate={{ opacity: isHovered ? 0.05 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />

                                            {/* Step icon container */}
                                            <motion.div 
                                                className={`relative flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mr-4 lg:mr-5 bg-gradient-to-r ${isHovered ? step.hoverGradient : step.gradient} shadow-lg`}
                                                animate={{
                                                    scale: isHovered ? 1.1 : 1,
                                                    rotate: isHovered ? [0, 5, -5, 0] : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                                                
                                                {/* Step number badge */}
                                                <motion.div 
                                                    className="absolute -top-2 -right-2 w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold bg-white text-gray-900 shadow-md border-2 border-white"
                                                    animate={{
                                                        scale: isHovered ? 1.2 : 1,
                                                        rotate: isHovered ? 360 : 0
                                                    }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    {step.id}
                                                </motion.div>

                                                {/* Animated particles on hover */}
                                                {isHovered && (
                                                    <>
                                                        {[...Array(4)].map((_, i) => (
                                                            <motion.div
                                                                key={i}
                                                                className="absolute w-1 h-1 bg-white rounded-full"
                                                                style={{
                                                                    top: `${30 + i * 10}%`,
                                                                    left: `${30 + i * 15}%`,
                                                                }}
                                                                animate={{
                                                                    scale: [0, 1, 0],
                                                                    opacity: [0, 1, 0],
                                                                    x: [0, Math.cos(i) * 15],
                                                                    y: [0, Math.sin(i) * 15]
                                                                }}
                                                                transition={{
                                                                    duration: 1.5,
                                                                    repeat: Infinity,
                                                                    delay: i * 0.2
                                                                }}
                                                            />
                                                        ))}
                                                    </>
                                                )}
                                            </motion.div>

                                            {/* Content */}
                                            <div className="flex-grow relative z-10">
                                                <motion.h3 
                                                    className="text-lg lg:text-xl font-bold text-gray-900 mb-1"
                                                    animate={{
                                                        color: isHovered ? "#059669" : "#111827"
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {step.title}
                                                </motion.h3>
                                                <motion.p 
                                                    className="text-sm lg:text-base text-gray-600"
                                                    animate={{
                                                        color: isHovered ? "#047857" : "#4B5563"
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {step.description}
                                                </motion.p>
                                            </div>
                                        </div>

                                        {/* Active indicator line */}
                                        <motion.div
                                            className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${step.gradient} rounded-r-full`}
                                            animate={{
                                                scaleY: isHovered ? 1 : 0.7,
                                                opacity: isHovered ? 1 : 0.7
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* CTA Button */}
                        <motion.button 
                            className="w-full sm:w-auto group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-8 lg:px-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden mx-auto xl:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -2,
                                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                                <Play className="w-5 h-5 lg:w-6 lg:h-6 relative z-10" />

                            <span className="text-base lg:text-lg relative z-10">Start Playing</span>
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Zap className="w-5 h-5 lg:w-6 lg:h-6 relative z-10" />
                            </motion.div>
                        </motion.button>
                    </motion.div>

                    {/* Vertical divider for larger screens */}
                    <div className="hidden xl:block w-px h-80 2xl:h-96 bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-30"></div>

                    {/* Right Side - Store Display */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full xl:w-2/5 max-w-md xl:max-w-none relative"
                    >
                        <motion.div 
                            className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden"
                            animate={{
                                boxShadow: [
                                    "0 25px 50px rgba(0, 0, 0, 0.3)",
                                    "0 25px 60px rgba(59, 130, 246, 0.1)",
                                    "0 25px 50px rgba(0, 0, 0, 0.3)"
                                ]
                            }}
                            transition={{ duration: 6, repeat: Infinity }}
                        >
                            {/* Background pattern */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
                            
                            <div className="relative z-10">
                                {/* Header */}
                                <div className="text-center mb-6 lg:mb-8">
                                   
                                    <h3 className="text-xl lg:text-2xl xl:text-xl 2xl:text-2xl font-bold text-white mb-2">
                                        Available at Your{' '}
                                        <motion.span 
                                            className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
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
                                            Favorite Stores
                                        </motion.span>
                                    </h3>
                                   
                                </div>

                                {/* Store grid */}
                                <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-6">
                                    {stores.map((store, index) => (
                                        <motion.div 
                                            key={store.name}
                                            className="group relative"
                                            initial={{ scale: 0, opacity: 0, rotateY: -90 }}
                                            animate={inView ? { scale: 1, opacity: 1, rotateY: 0 } : {}}
                                            transition={{ 
                                                duration: 0.6, 
                                                delay: 0.4 + index * 0.1,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                            whileHover={{ 
                                                scale: 1.05, 
                                                y: -8,
                                                rotateY: 5,
                                                zIndex: 10
                                            }}
                                        >
                                            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 lg:p-5 text-center hover:bg-white/20 transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                                                
                                                {/* Hover glow effect */}
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                />

                                                {/* Store logo container */}
                                                <div className={`flex items-center justify-center mb-3 h-12 lg:h-14 ${store.name === 'Foodland' ? 'p-2' : ''} ${store.name === 'FreshCo' ? 'bg-yellow-400 rounded-lg' : ''}`}>
                                                    <motion.img 
                                                        src={store.logo} 
                                                        alt={store.name}
                                                        className={`max-h-10 lg:max-h-12 ${store.name === 'Foodland' ? 'h-6 lg:h-8' : 'h-10 lg:h-12'} object-contain`}
                                                        whileHover={{ scale: 1.1 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </div>
                                                
                                                <h4 className="text-white font-semibold text-sm lg:text-base mb-3 mt-auto">{store.name}</h4>
                                                
                                                {/* Download button */}
                                                <motion.button 
                                                    className={`w-full ${store.bgColor} ${store.textColor} font-semibold py-2.5 px-3 rounded-xl text-xs lg:text-sm hover:shadow-lg transition-all duration-300 mt-auto relative overflow-hidden`}
                                                    whileHover={{ 
                                                        scale: 1.05,
                                                        y: -2,
                                                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <motion.div
                                                        className="absolute inset-0 bg-white/10"
                                                        animate={{
                                                            x: ["-100%", "100%"]
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            repeatDelay: 3
                                                        }}
                                                    />
                                                    <span className="relative z-10">Get App</span>
                                                </motion.button>
                                            </div>

                                            {/* Enhanced glow effect on hover */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"
                                            />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Sync badge */}
                                <div className="text-center">
                                    <motion.div 
                                        className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2.5 lg:px-5 lg:py-3 backdrop-blur-lg"
                                        animate={{
                                            boxShadow: [
                                                "0 0 20px rgba(34, 197, 94, 0.2)",
                                                "0 0 30px rgba(34, 197, 94, 0.3)",
                                                "0 0 20px rgba(34, 197, 94, 0.2)"
                                            ]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                            <Star className="w-3 h-3 lg:w-4 lg:h-4 text-green-400 mr-2" />

                                        <span className="text-green-300 font-medium text-xs lg:text-sm">Syncs with Challenge Arena</span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating elements - positioned better for all screen sizes */}
                        <motion.div 
                            className="absolute -top-4 -right-4 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg z-20"
                            animate={{ 
                                rotate: [0, 360],
                                y: [0, -10, 0]
                            }}
                            transition={{ 
                                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <Gift className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                        </motion.div>

                        <motion.div 
                            className="absolute -bottom-3 -left-3 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg z-20"
                            animate={{ 
                                y: [0, -15, 0],
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{ 
                                duration: 5, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                        >
                            <Star className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HowToPlaySection