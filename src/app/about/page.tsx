'use client';

import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Globe, Calendar, Award, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  const leadership = [
    {
      name: 'Pdt. James Mantiri',
      role: 'Gembala Jemaat',
      description: 'Memimpin jemaat kami dengan kebijaksanaan dan kasih selama lebih dari 10 tahun.',
      image: 'JM'
    },
    {
      name: 'Joen Mantiri',
      role: 'Ibu Gembala',
      description: 'Mendukung dan memberdayakan komunitas kami melalui pelayanan dan pengajaran Bersama suami tercinta.',
      image: 'JM'
    },
    {
      name: 'Bp. Margono',
      role: 'Ketua Dewan Penatua',
      description: 'Memberikan bimbingan rohani dan tata kelola gereja serta memberikan nasihat bijaksana kepada seluruh jemaat.',
      image: 'MG'
    }
  ];

  const history = [
    {
      year: '2015',
      title: 'Gereja Didirikan',
      description: 'GPDI Persadamas didirikan dengan visi untuk melayani masyarakat setempat.'
    },
    {
      year: '2018',
      title: 'Bangunan Pertama',
      description: 'Bangunan permanen pertama kami dibangun untuk menampung jemaat yang terus bertumbuh.'
    },
    {
      year: '2022',
      title: 'Perluasan',
      description: 'Menambahkan aula persekutuan dan ruang anak untuk melayani komunitas kami dengan lebih baik.'
    },
    {
      year: '2023',
      title: 'Renovasi Modern',
      description: 'Memperbarui fasilitas kami dengan teknologi modern sambil mempertahankan warisan kami.'
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
              Tentang GPDI Persadamas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Temukan kisah kami, kenali para pemimpin kami, dan pelajari misi kami 
              untuk melayani Tuhan dan komunitas kami dengan kasih dan iman.
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
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Kisah Kami</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  GPDI Persadamas didirikan pada tahun 2013 oleh sekelompok kecil orang percaya 
                  yang berbagi visi untuk menciptakan tempat ibadah dan persekutuan yang ramah. 
                  Yang dimulai sebagai pertemuan sederhana di sekolah lokal telah berkembang menjadi 
                  komunitas yang berkembang dengan lebih dari 500 jemaat.
                </p>
                <p>
                  Selama 10 tahun terakhir, kami tetap berkomitmen pada nilai-nilai inti kami yaitu 
                  kasih, komunitas, iman, dan pelayanan. Gereja kami telah menjadi mercusuar harapan 
                  di komunitas kami, memberikan bimbingan rohani, dukungan praktis, dan 
                  tempat di mana orang dapat bertumbuh dalam hubungan mereka dengan Tuhan.
                </p>
                <p>
                  Saat ini, GPDI Persadamas terus berkembang sambil tetap setia pada 
                  prinsip-prinsip dasar kami. Kami bangga dengan keragaman jemaat kami dan 
                  komitmen kami untuk melayani tidak hanya anggota kami, tetapi seluruh 
                  komunitas dan sekitarnya.
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
                <h3 className="text-2xl font-bold mb-2">Warisan Kami</h3>
                <p className="text-blue-100">10 tahun pelayanan setia</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Fondasi Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dibangun di atas fondasi yang kokoh dari firman Tuhan dan dipandu oleh prinsip-prinsip inti kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Misi Kami',
                content: 'Mengasihi Tuhan, mengasihi sesama, dan menjadikan murid-murid yang mengubah komunitas dan dunia melalui kuasa Yesus Kristus.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Eye,
                title: 'Visi Kami',
                content: 'Menjadi komunitas yang berkembang di mana setiap orang mengalami kasih Tuhan, bertumbuh dalam iman, dan menemukan tujuan mereka dalam melayani sesama.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Heart,
                title: 'Nilai-Nilai Kami',
                content: 'Kasih, Komunitas, Iman, dan Pelayanan - empat pilar yang memandu segala yang kami lakukan sebagai keluarga gereja.',
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Para Pemimpin Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kenali para pemimpin berdedikasi yang membimbing keluarga gereja kami dengan kebijaksanaan dan kasih
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Perjalanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tonggak penting dalam sejarah dan pertumbuhan gereja kami
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
            <h2 className="text-4xl font-bold mb-6">Bergabunglah dengan Keluarga Kami</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Kami ingin menyambut Anda ke dalam komunitas iman, persekutuan, dan pelayanan kami.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Rencanakan Kunjungan Anda
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
