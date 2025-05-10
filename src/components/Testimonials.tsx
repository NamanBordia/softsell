'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ojas B A',
    role: 'IT Director',
    company: 'TechCorp Solutions',
    content: 'SoftSell made selling our unused Microsoft licenses incredibly easy. The process was smooth, and we received payment within hours.',
  },
  {
    name: 'Namit Bordia',
    role: 'Software Engineer',
    company: 'Innovate Labs',
    content: 'I was skeptical at first, but SoftSell provided the best value for my Adobe Creative Suite licenses. Highly recommended!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Our <span className="text-blue-600 dark:text-blue-400">Customers</span> Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 