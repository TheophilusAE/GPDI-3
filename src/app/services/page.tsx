'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Music, BookOpen, Calendar, MapPin, Heart, Globe } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Ibadah Minggu Pagi',
      time: '09:00 & 11:00',
      description: 'Bergabunglah dengan kami untuk ibadah yang menginspirasi, pesan yang kuat, dan persekutuan dengan komunitas kami.',
      features: ['Musik Hidup', 'Program Anak', 'Kopi & Persekutuan', 'Tempat Penitipan Tersedia'],
      icon: Music,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Ibadah Doa Rabu',
      time: '19:00',
      description: 'Pertemuan tengah minggu untuk doa, refleksi, dan dorongan rohani.',
      features: ['Permohonan Doa', 'Studi Alkitab', 'Kelompok Kecil', 'Persekutuan'],
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Kelompok Studi Alkitab',
      time: 'Kamis 19:00',
      description: 'Menyelami firman Tuhan dengan studi interaktif dan diskusi.',
      features: ['Studi Interaktif', 'Kelompok Kecil', 'Sesi Tanya Jawab', 'Materi Sumber'],
      icon: BookOpen,
      color: 'from-green-500 to-green-600'
    }
  ];

  const ministries = [
    {
      title: 'Pelayanan Anak',
      description: 'Program khusus untuk anak-anak usia 3-12 tahun dengan pembelajaran Alkitab yang menyenangkan.',
      icon: Users,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Pelayanan Remaja',
      description: 'Komunitas remaja yang bertumbuh dalam iman melalui kegiatan yang relevan dan menarik.',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Pelayanan Lansia',
      description: 'Dukungan dan persekutuan khusus untuk jemaat lanjut usia.',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Pelayanan Musik',
      description: 'Tim musik yang memimpin pujian dan penyembahan dalam setiap ibadah.',
      icon: Music,
      color: 'from-blue-500 to-cyan-500'
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
              Ibadah & Pelayanan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dengan kami untuk ibadah, persekutuan, dan pertumbuhan rohani. 
              Kami menawarkan berbagai layanan dan acara sepanjang minggu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regular Services */}
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
              Ibadah Rutin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dengan kami untuk ibadah, persekutuan, dan pertumbuhan rohani. 
              Kami menawarkan berbagai layanan dan acara sepanjang minggu.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
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
      </section>

      {/* Ministries */}
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
              Pelayanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Berbagai pelayanan yang melayani kebutuhan rohani dan sosial jemaat kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${ministry.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <ministry.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{ministry.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{ministry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times Summary */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-6">Jadwal Ibadah</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Ibadah Minggu</h4>
                  <p className="text-blue-100">09:00 & 11:00</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Ibadah Doa Rabu</h4>
                  <p className="text-blue-100">19:00</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Studi Alkitab</h4>
                  <p className="text-blue-100">Kamis 19:00</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Rencanakan Kunjungan Anda
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
