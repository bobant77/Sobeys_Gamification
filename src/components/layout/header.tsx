'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu, X, Sparkles } from 'lucide-react'
import Link from 'next/link'

const navigationItems = [
    { name: 'How to Play', href: '#how-to-play' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#footer' },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
        const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

   useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY
        
        if (currentScrollY <= 10) {
            setIsHeaderVisible(true)
        } else {
            setIsHeaderVisible(false)
        }
        
        setIsScrolled(currentScrollY > 20)
        setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
}, [lastScrollY])
    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
                isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
            } ${isScrolled
                ? 'bg-white/85 backdrop-blur-2xl shadow-2xl border-b border-green-100/40'
                : 'bg-gradient-to-b from-black/25 via-green-900/35 to-transparent'
            }`}

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            type: "spring" as const,
            stiffness: 300,
            damping: 30
        }}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0 z-10"
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        animate={{
                            scale: 1,
                            rotate: 0,
                            opacity: 1
                        }}
                        transition={{
                            type: "spring" as const,
                            stiffness: 200,
                            damping: 15,
                            delay: 0.2
                        }}
                        whileHover={{
                            scale: 1.1
                        }}
                    >
                        <Link
                            href="/"
                            className="group flex items-center space-x-4 relative"
                        >
                            {/* Logo container */}
                            <motion.div
                                className="relative"
                                whileHover={{ rotateY: 15 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                    <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${isScrolled ? 'bg-green-700' : 'bg-transparent'
                                        }`} />
                                    <Image
                                        src="/sobeys.svg"
                                        alt="Sobeys Logo"
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 transition-all duration-500 group-hover:brightness-125 relative z-10"
                                        priority
                                    />
                                    {/* Sobeys green overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-green-600 rounded-xl"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileHover={{
                                            opacity: 0.2,
                                            scale: 1
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>

                                {/* Sparkles */}
                                <motion.div
                                    className="absolute -top-2 -right-2"
                                    animate={{
                                        rotate: [0, 360],
                                        scale: [0.8, 1.2, 0.8]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: [0.25, 0.1, 0.25, 1]
                                    }}
                                >
                                    <Sparkles className="w-5 h-5 text-yellow-400" />
                                </motion.div>
                            </motion.div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigationItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1
                                }}
                                transition={{
                                    type: "spring" as const,
                                    stiffness: 300,
                                    damping: 25,
                                    delay: 0.4 + index * 0.1
                                }}
                                whileHover={{
                                    y: -2,
                                    scale: 1.05
                                }}
                                onHoverStart={() => setHoveredItem(item.name)}
                                onHoverEnd={() => setHoveredItem(null)}
                            >
                                <a
                                    href={item.href}
                                    className="group relative px-6 py-3 text-base font-semibold transition-all duration-500 rounded-2xl overflow-hidden"
                                >
                                    {/* Background */}
                                    <motion.div
                                        className={`absolute inset-0 rounded-2xl ${isScrolled
                                            ? 'bg-gradient-to-r from-gray-50 via-green-50 to-emerald-50'
                                            : 'bg-gradient-to-r from-white/10 via-green-500/20 to-emerald-500/20 backdrop-blur-sm'
                                            }`}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{
                                            scale: hoveredItem === item.name ? 1 : 0,
                                            opacity: hoveredItem === item.name ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Text */}
                                    <span className={`relative z-10 transition-all duration-500 ${isScrolled
                                        ? 'text-gray-700 group-hover:text-green-700'
                                        : 'text-white group-hover:text-green-200'
                                        }`}>
                                        {item.name}
                                    </span>

                                    {/* Underline */}
                                    <motion.div
                                        className={`absolute bottom-2 left-1/2 h-1 rounded-full ${isScrolled ? 'bg-green-500' : 'bg-green-400'
                                            }`}
                                        initial={{ width: 0, x: "-50%" }}
                                        animate={{
                                            width: hoveredItem === item.name ? 32 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </a>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`relative p-3 rounded-2xl transition-all duration-500 ${isScrolled
                                ? 'text-gray-700 hover:text-purple-600'
                                : 'text-white hover:text-yellow-300'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Background */}
                            <motion.div
                                className={`absolute inset-0 rounded-2xl ${isScrolled ? 'bg-purple-50' : 'bg-white/10'
                                    }`}
                                initial={{ scale: 0 }}
                                animate={{ scale: isMenuOpen ? 1.1 : 0 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Icon */}
                            <div className="relative w-6 h-6">
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="w-6 h-6" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="w-6 h-6" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            className="lg:hidden overflow-hidden"
                        >
                            <motion.div
                                className={`py-6 space-y-2 ${isScrolled
                                    ? 'bg-white/95 backdrop-blur-2xl'
                                    : 'bg-gradient-to-b from-gray-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl'
                                    } rounded-b-3xl mt-4 border-t shadow-2xl ${isScrolled ? 'border-green-100/40' : 'border-green-500/30'
                                    }`}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                {navigationItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        onClick={handleLinkClick}
                                        className={`block px-6 py-4 text-base font-semibold transition-all duration-500 rounded-2xl mx-4 group relative ${isScrolled
                                            ? 'text-gray-700 hover:text-green-700'
                                            : 'text-white hover:text-green-200'
                                            }`}
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{
                                            x: 0,
                                            opacity: 1
                                        }}
                                        transition={{
                                            type: "spring" as const,
                                            stiffness: 300,
                                            damping: 25,
                                            delay: index * 0.1
                                        }}
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {/* Background */}
                                        <motion.div
                                            className={`absolute inset-2 rounded-xl ${isScrolled ? 'bg-green-50' : 'bg-white/5'
                                                }`}
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileHover={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                        />

                                        <div className="flex items-center space-x-4 relative z-10">
                                            {/* Bullet point */}
                                            <div className={`w-2 h-2 rounded-full ${isScrolled ? 'bg-green-500' : 'bg-green-400'
                                                }`} />
                                            <span>{item.name}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile backdrop */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </motion.header>

    )
}