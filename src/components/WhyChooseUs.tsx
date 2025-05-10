'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Secure Transactions',
    description: 'Bank-level security for all license transfers and payments',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Fast Process',
    description: 'Complete the entire process in less than 24 hours',
    icon: ClockIcon,
  },
  {
    title: 'Best Market Rates',
    description: 'Get the highest value for your software licenses',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Expert Support',
    description: 'Dedicated team to guide you through the process',
    icon: UserGroupIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Why Choose <span className="text-blue-600 dark:text-blue-400">SoftSell</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 