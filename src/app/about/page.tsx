'use client';

import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Globe, Calendar, Award, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  const leadership = [
    {
      name: 'Pastor Michael Johnson',
      role: 'Senior Pastor',
      description: 'Leading our congregation with wisdom and compassion for over 10 years.',
      image: 'MJ'
    },
    {
      name: 'Pastor Sarah Williams',
      role: 'Associate Pastor',
      description: 'Overseeing our community outreach and youth ministries.',
      image: 'SW'
    },
    {
      name: 'Elder Robert Chen',
      role: 'Elder Board Chairman',
      description: 'Providing spiritual guidance and church governance.',
      image: 'RC'
    }
  ];

  const history = [
    {
      year: '1973',
      title: 'Church Founded',
      description: 'Grace Community Church was established with a vision to serve the local community.'
    },
    {
      year: '1985',
      title: 'First Building',
      description: 'Our first permanent building was constructed to accommodate our growing congregation.'
    },
    {
      year: '2000',
      title: 'Expansion',
      description: 'Added the fellowship hall and children\'s wing to better serve our community.'
    },
    {
      year: '2015',
      title: 'Modern Renovation',
      description: 'Updated our facilities with modern technology while preserving our heritage.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Grace Community
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover our story, meet our leadership, and learn about our mission 
              to serve God and our community with love and faith.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Grace Community Church was founded in 1973 by a small group of believers 
                  who shared a vision of creating a welcoming place of worship and fellowship. 
                  What started as a humble gathering in a local school has grown into a 
                  thriving community of over 500 members.
                </p>
                <p>
                  Over the past 50 years, we have remained committed to our core values of 
                  love, community, faith, and service. Our church has been a beacon of hope 
                  in our community, providing spiritual guidance, practical support, and 
                  a place where people can grow in their relationship with God.
                </p>
                <p>
                  Today, Grace Community continues to evolve while staying true to our 
                  founding principles. We are proud of our diverse congregation and our 
                  commitment to serving not just our members, but our entire community 
                  and beyond.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Our Heritage</h3>
                <p className="text-blue-100">50 years of faithful service</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on the solid foundation of God's word and guided by our core principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                content: 'To love God, love people, and make disciples who transform our community and world through the power of Jesus Christ.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Eye,
                title: 'Our Vision',
                content: 'To be a thriving community where every person experiences God\'s love, grows in faith, and discovers their purpose in serving others.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Heart,
                title: 'Our Values',
                content: 'Love, Community, Faith, and Service - the four pillars that guide everything we do as a church family.',
                color: 'from-green-500 to-green-600'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide our church family with wisdom and compassion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {leader.image}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                <p className="text-gray-600 leading-relaxed">{leader.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our church's history and growth
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {history.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className={`bg-white rounded-2xl p-6 shadow-lg ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                      <div className="flex items-center mb-4">
                        <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full mx-4"></div>
                  <div className="w-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Family</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We'd love to welcome you into our community of faith, fellowship, and service.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Plan Your Visit
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
