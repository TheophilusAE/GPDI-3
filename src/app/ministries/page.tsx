'use client';

import { motion } from 'framer-motion';
import { Users, Heart, BookOpen, Music, Globe, Calendar, Phone, Mail, Clock } from 'lucide-react';

export default function MinistriesPage() {
  const ministries = [
    {
      title: 'Pelayanan Anak',
      description: 'Program khusus untuk anak-anak usia 3-12 tahun dengan pembelajaran Alkitab yang menyenangkan dan interaktif.',
      features: ['Sekolah Minggu', 'Kamp Anak', 'Konser Anak', 'Kelas Kreatif'],
      icon: Users,
      color: 'from-yellow-500 to-orange-500',
      schedule: 'Minggu 09:00 & 11:00',
      contact: 'Sari - 0812-3456-7890'
    },
    {
      title: 'Pelayanan Remaja',
      description: 'Komunitas remaja yang bertumbuh dalam iman melalui kegiatan yang relevan dan menarik.',
      features: ['Kelompok Remaja', 'Retret Remaja', 'Konser Remaja', 'Mentoring'],
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      schedule: 'Jumat 19:00',
      contact: 'David - 0813-4567-8901'
    },
    {
      title: 'Pelayanan Lansia',
      description: 'Dukungan dan persekutuan khusus untuk jemaat lanjut usia dengan program yang sesuai kebutuhan mereka.',
      features: ['Persekutuan Lansia', 'Kunjungan Rumah', 'Kelas Kesehatan', 'Aktivitas Sosial'],
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      schedule: 'Selasa 10:00',
      contact: 'Martha - 0814-5678-9012'
    },
    {
      title: 'Pelayanan Musik',
      description: 'Tim musik yang memimpin pujian dan penyembahan dalam setiap ibadah dengan talenta yang luar biasa.',
      features: ['Tim Pujian', 'Konser Musik', 'Kelas Musik', 'Rekaman Lagu'],
      icon: Music,
      color: 'from-blue-500 to-cyan-500',
      schedule: 'Rabu 19:00',
      contact: 'Samuel - 0815-6789-0123'
    },
    {
      title: 'Pelayanan Pemuda',
      description: 'Komunitas pemuda dewasa yang aktif dalam pelayanan dan pengembangan diri.',
      features: ['Kelompok Pemuda', 'Seminar Karir', 'Pelayanan Sosial', 'Networking'],
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      schedule: 'Sabtu 19:00',
      contact: 'Ruth - 0816-7890-1234'
    },
    {
      title: 'Pelayanan Keluarga',
      description: 'Program yang memperkuat ikatan keluarga dan memberikan dukungan untuk keluarga Kristen.',
      features: ['Seminar Pernikahan', 'Konseling Keluarga', 'Retret Keluarga', 'Parenting Class'],
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      schedule: 'Bulanan',
      contact: 'Petrus & Maria - 0817-8901-2345'
    }
  ];

  const volunteerOpportunities = [
    {
      title: 'Relawan Ibadah',
      description: 'Bantu dalam persiapan dan pelaksanaan ibadah mingguan',
      time: 'Minggu pagi',
      commitment: '2-3 jam/minggu'
    },
    {
      title: 'Relawan Anak',
      description: 'Mengajar dan membimbing anak-anak dalam program Sekolah Minggu',
      time: 'Minggu pagi',
      commitment: '2 jam/minggu'
    },
    {
      title: 'Relawan Komunitas',
      description: 'Terlibat dalam kegiatan pelayanan sosial dan komunitas',
      time: 'Fleksibel',
      commitment: '4-6 jam/bulan'
    },
    {
      title: 'Relawan Teknis',
      description: 'Membantu dengan sound system, lighting, dan teknologi ibadah',
      time: 'Sesuai jadwal',
      commitment: '3-4 jam/minggu'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pelayanan Kami
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Temukan tempat Anda untuk melayani dan bertumbuh dalam iman. 
              Kami memiliki berbagai pelayanan yang sesuai dengan minat dan talenta Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ministries Grid */}
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
              Pelayanan yang Tersedia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dengan salah satu pelayanan kami dan temukan cara untuk melayani Tuhan dan sesama
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${ministry.color} rounded-full flex items-center justify-center mr-4`}>
                    <ministry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{ministry.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {ministry.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {ministry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {ministry.schedule}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    {ministry.contact}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  Bergabung Sekarang
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
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
              Kesempatan Relawan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Temukan cara untuk melayani dengan menjadi relawan dalam berbagai kegiatan gereja
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{opportunity.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">Waktu:</span>
                    <span className="ml-2">{opportunity.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-medium">Komitmen:</span>
                    <span className="ml-2">{opportunity.commitment}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                >
                  Daftar sebagai Relawan
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
            <h2 className="text-4xl font-bold mb-6">Siap Melayani?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan salah satu pelayanan kami dan temukan cara untuk 
              menggunakan talenta Anda dalam melayani Tuhan dan sesama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Hubungi Kami
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
