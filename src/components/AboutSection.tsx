'use client';

import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Globe } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: 'Kasih',
      description: 'Kami percaya dalam menunjukkan kasih Tuhan melalui tindakan dan hubungan kami dengan sesama.'
    },
    {
      icon: Users,
      title: 'Komunitas',
      description: 'Membangun hubungan yang kuat dan saling mendukung dalam iman dan perjalanan hidup.'
    },
    {
      icon: BookOpen,
      title: 'Iman',
      description: 'Bertumbuh dalam pemahaman firman Tuhan dan menghidupi iman kita dalam kehidupan sehari-hari.'
    },
    {
      icon: Globe,
      title: 'Pelayanan',
      description: 'Menjangkau komunitas dan dunia dengan belas kasihan dan bantuan praktis.'
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
            Tentang GPDI Persadamas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selama lebih dari 50 tahun, GPDI Persadamas telah menjadi mercusuar harapan dan iman 
            di komunitas kami. Kami adalah keluarga yang beragam yang dipersatukan oleh kasih kepada Tuhan dan 
            komitmen untuk melayani sesama.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Cerita Kami</h3>
                <p className="text-blue-100">Didirikan pada 1973 dengan visi untuk melayani</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Misi & Visi Kami
            </h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">Misi Kami</h4>
                <p className="text-gray-600">
                  Mengasihi Tuhan, mengasihi sesama, dan menjadikan murid-murid yang mengubah komunitas 
                  dan dunia melalui kuasa Yesus Kristus.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-purple-600 mb-2">Visi Kami</h4>
                <p className="text-gray-600">
                  Menjadi komunitas yang berkembang di mana setiap orang mengalami kasih Tuhan, 
                  bertumbuh dalam iman, dan menemukan tujuan mereka dalam melayani sesama.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nilai-Nilai Inti Kami
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Siap Bergabung dengan Keluarga Kami?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Kami dengan senang hati menyambut Anda ke dalam komunitas iman dan persekutuan kami.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Rencanakan Kunjungan Anda
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
