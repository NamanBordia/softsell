'use client';

import { motion } from 'framer-motion';
import { CloudArrowUpIcon, CurrencyDollarIcon, BanknotesIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Upload License',
    description: 'Submit your software license details through our secure platform',
    icon: CloudArrowUpIcon,
  },
  {
    title: 'Get Valuation',
    description: 'Receive an instant quote based on current market rates',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Get Paid',
    description: 'Complete the sale and receive payment within 24 hours',
    icon: BanknotesIcon,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          How It <span className="text-blue-600 dark:text-blue-400">Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-blue-50 dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 