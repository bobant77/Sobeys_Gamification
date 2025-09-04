"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Gift, ShoppingCart, Trophy, HelpCircle, Plus, Mail, FileText } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const FAQSection = ({ id = "faq" }: { id?: string })  => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set()); // All items start closed
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      icon: <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />,
      question: "What is the Grocery Giveaways contest?",
      answer: "Grocery Giveaways is a challenge-based contest that customers can participate in. To participate you must download the Sobeys, Safeway, Foodland and/or FreshCo app, create an account and link your Scene+ card."
    },
    {
      icon: <Gift className="w-4 h-4 md:w-5 md:h-5" />,
      question: "What are the prizes for this contest?",
      answer: "We offer incredible prizes including weekly grocery gift cards worth up to $500, monthly grand prizes of $1,000 grocery credits, and special seasonal prizes. All winners are selected randomly from eligible participants who complete the required challenges."
    },
    {
      icon: <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />,
      question: "Can I play this game without downloading the app?",
      answer: "No, you must download one of our participating apps (Sobeys, Safeway, Foodland, or FreshCo) to participate. The app is required to track your challenges, collect chips, and manage your contest entries."
    },
    {
      icon: <Trophy className="w-4 h-4 md:w-5 md:h-5" />,
      question: "Can I play this game in more than one App?",
      answer: "Yes! You can download and participate through multiple participating apps. However, your Scene+ card must be linked across all apps, and prizes are awarded per Scene+ account, not per app."
    },
    {
      icon: <Gift className="w-4 h-4 md:w-5 md:h-5" />,
      question: "What are Chips?",
      answer: "Chips are digital tokens you earn by completing shopping challenges and activities within the app. Each chip represents an entry into our contests and giveaways. The more chips you collect, the better your chances of winning!"
    },
    {
      icon: <Plus className="w-4 h-4 md:w-5 md:h-5" />,
      question: "How do I collect Grocery Giveaways Chips?",
      answer: "Collect chips by completing weekly shopping challenges, making qualifying purchases with your Scene+ card, participating in bonus activities, and engaging with special promotions. Check your app regularly for new chip-earning opportunities!"
    },
    {
      icon: <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />,
      question: "How can I complete a challenge?",
      answer: "Challenges vary but typically involve purchasing specific products, spending minimum amounts, or shopping in certain categories. Simply shop as instructed, ensure your Scene+ card is scanned, and the challenge will auto-complete within 24-48 hours."
    },
    {
      icon: <Trophy className="w-4 h-4 md:w-5 md:h-5" />,
      question: "What happens to my Chips when the program ends?",
      answer: "All accumulated chips will be entered into the final grand prize draw. Any remaining chips after the contest period will expire, so make sure to participate actively while the contest is running."
    }
  ];

  return (
    <section id={id} className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-green-700">Questions</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Everything you need to know about our Grocery Giveaways program
          </p>
        </motion.div>

        {/* FAQ Grid - Two Columns on Large Screens */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-xl transition-all duration-200"
                  aria-expanded={openItems.has(index)}
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className={`flex-shrink-0 p-2.5 rounded-lg transition-all duration-300 ${
                        openItems.has(index) 
                          ? 'bg-green-700 text-white' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {item.icon}
                      </div>
                      <h3 className={`text-base font-semibold transition-colors duration-200 ${
                        openItems.has(index) ? 'text-green-800' : 'text-gray-900'
                      }`}>
                        {item.question}
                      </h3>
                    </div>
                    <div className={`flex-shrink-0 ml-4 p-1.5 rounded-full transition-all duration-300 ${
                      openItems.has(index) 
                        ? 'bg-green-100 text-green-700 rotate-180' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openItems.has(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2, delay: 0.1 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="pl-12">
                          <div className="h-px bg-green-100 mb-4"></div>
                          <motion.p 
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-base leading-relaxed"
                          >
                            {item.answer}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-green-50 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto border border-green-100">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
              Our support team is here to help you with any additional questions about Grocery Giveaways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 shadow-md hover:shadow-lg" type="button">
                <Mail className="w-5 h-5" />
                Contact Support
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-green-700 px-6 py-3 rounded-lg font-medium text-base border border-green-200 hover:border-green-300 transition-all duration-200 shadow-sm" type="button">
                <FileText className="w-5 h-5" />
                View Full Rules
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 md:mt-10 text-sm">
          <a href="#" className="text-green-700 hover:text-green-800 transition-colors font-medium">
            Full Contest Rules
          </a>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <a href="#" className="text-green-700 hover:text-green-800 transition-colors font-medium">
            Contest Rules for Sobeys Inc Teammates
          </a>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <a href="#" className="text-green-700 hover:text-green-800 transition-colors font-medium">
            Privacy Policy
          </a>
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-4 md:mt-5">
          © {new Date().getFullYear()} Sobeys Inc. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;