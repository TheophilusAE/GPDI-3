'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Member for 5 years',
      content: 'Grace Community has been a blessing to our family. The welcoming atmosphere and genuine care from everyone makes it feel like home.',
      rating: 5,
      image: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Youth Leader',
      content: 'The youth programs here have helped me grow in my faith and build lasting friendships. I\'m grateful for this community.',
      rating: 5,
      image: 'MC'
    },
    {
      name: 'Elder Margaret Williams',
      role: 'Member for 25 years',
      content: 'This church has been my spiritual home for decades. The teaching is solid, the fellowship is warm, and the love is genuine.',
      rating: 5,
      image: 'MW'
    },
    {
      name: 'David & Lisa Rodriguez',
      role: 'New Members',
      content: 'We were welcomed with open arms from day one. The children\'s programs are excellent, and we feel truly part of the family.',
      rating: 5,
      image: 'DR'
    },
    {
      name: 'Pastor James Thompson',
      role: 'Former Pastor',
      content: 'Grace Community embodies what it means to be a church family. The love, support, and commitment to serving others is inspiring.',
      rating: 5,
      image: 'JT'
    },
    {
      name: 'Rebecca Kim',
      role: 'Volunteer Coordinator',
      content: 'The opportunities to serve and make a difference in our community have enriched my life in ways I never imagined.',
      rating: 5,
      image: 'RK'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from the hearts of our church family about their experiences 
            and the impact Grace Community has had on their lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-100">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Share Your Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our community and become part of a family that supports, 
              encourages, and grows together in faith.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Visit Us This Sunday
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
