'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Music, BookOpen, Calendar, MapPin } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Ibadah Minggu Pagi',
      time: '8:30',
      description: 'Bergabunglah dalam ibadah yang menginspirasi, pesan firman yang penuh kuasa, dan persekutuan dengan komunitas kami.',
      features: ['Puji-Pujian', 'Firman Tuhan','Tersedia Sekolah Minggu Untuk Anak'],
      icon: Music,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Doa Rabu Malam',
      time: '19:00',
      description: 'Pertemuan tengah minggu untuk berdoa, merefleksi, dan mendapat dorongan rohani.',
      features: ['Permohonan Doa', 'Pendalaman Alkitab', 'Kelompok Kecil', 'Persekutuan'],
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Ibadah Minggu Sore',
      time: '16.00',
      description: 'Bergabunglah dalam ibadah yang menginspirasi, pesan firman yang penuh kuasa, dan persekutuan dengan komunitas kami.',
      features: ['Puji-Pujian', 'Firman Tuhan','Tersedia Sekolah Minggu Untuk Anak'],
      icon: BookOpen,
      color: 'from-green-500 to-green-600'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'TBA',
      date: '-',
      time: '-',
      location: '-',
      description: '-'
    },
    {
      id: 2,
      title: 'TBA',
      date: '-',
      time: '-',
      location: '-',
      description: '-'
    },
    {
      id: 3,
      title: 'TBA',
      date: '-',
      time: '-',
      location: '-',
      description: '-'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ibadah & Acara Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah bersama kami dalam ibadah, persekutuan, dan pertumbuhan rohani. 
            Kami menyediakan berbagai layanan dan acara sepanjang minggu untuk menyambut Anda.
          </p>
        </motion.div>

        {/* Regular Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Ibadah Rutin
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mr-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{service.title}</h4>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{service.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Acara Mendatang
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-800">{event.title}</h4>
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {event.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  Selengkapnya
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Times Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Jadwal Ibadah</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Ibadah Minggu</h4>
                <p className="text-blue-100">09:00 & 11:00</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Ibadah Tengah Minggu</h4>
                <p className="text-blue-100">19:00</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Doa & Puasa</h4>
                <p className="text-blue-100">Jumat 19:00</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
