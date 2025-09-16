'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Heart, BookOpen, Music } from 'lucide-react';

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: 'Natal Jemaat',
      date: 'TBA',
      time: 'TBA',
      location: 'TBA',
      description: 'TBA',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Paskah',
      date: 'TBA',
      time: 'TBA',
      location: 'TBA',
      description: 'TBA',
      icon: Calendar,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Ibadah Raya',
      date: 'TBA',
      time: 'TBA',
      location: 'TBA',
      description: 'TBA',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const eventCategories = [
    {
      title: 'Ibadah Minggu',
      description: 'Ibadah Rutin setiap minggu',
      count: 'Setiap Minggu'
    },
    {
      title: 'Ibadah Sekolah Minggu',
      description: 'Ibadah Rutin setiap minggu untuk anak-anak',
      count: 'Setiap Minggu'
    },
    {
      title: 'Doa & Puasa',
      description: 'Pertemuan doa mingguan di sertai dengan puasa',
      count: 'Setiap jumat'
    },
    {
      title: 'Ibadah Pemuda Remaja',
      description: 'Ibadah Rutin setiap minggu untuk remaja dan pemuda',
      count: 'Setiap Sabtu'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Acara & Kegiatan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dengan kami dalam berbagai acara dan kegiatan yang memperkaya 
              iman dan mempererat persekutuan komunitas kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Categories */}
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
              Jenis Acara
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Berbagai jenis acara yang kami selenggarakan sepanjang tahun
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{category.description}</p>
                <div className="text-blue-600 font-semibold text-sm">{category.count}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Acara Mendatang
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Jangan lewatkan acara-acara menarik yang akan datang
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center`}>
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{event.title}</h3>
                
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
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  Pelajari Lebih Lanjut
                </motion.button>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Bergabunglah dengan Acara Kami</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Daftarkan diri Anda untuk acara mendatang dan jangan lewatkan kesempatan 
              untuk bertumbuh dalam iman dan persekutuan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Daftar Acara
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Lihat Kalender
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
