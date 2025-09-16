'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Anggota selama 5 tahun',
      content: 'GPDI Persadamas telah menjadi berkat bagi keluarga kami. Suasana yang ramah dan kepedulian yang tulus dari semua orang membuatnya terasa seperti rumah.',
      rating: 5,
      image: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Pemimpin Pemuda',
      content: 'Program pemuda di sini telah membantu saya bertumbuh dalam iman dan membangun persahabatan yang langgeng. Saya bersyukur atas komunitas ini.',
      rating: 5,
      image: 'MC'
    },
    {
      name: 'Penatua Margaret Williams',
      role: 'Anggota selama 25 tahun',
      content: 'Gereja ini telah menjadi rumah rohani saya selama puluhan tahun. Pengajarannya kuat, persekutuannya hangat, dan kasihnya tulus.',
      rating: 5,
      image: 'MW'
    },
    {
      name: 'David & Lisa Rodriguez',
      role: 'Anggota Baru',
      content: 'Kami disambut dengan tangan terbuka sejak hari pertama. Program anak-anak sangat baik, dan kami benar-benar merasa menjadi bagian dari keluarga.',
      rating: 5,
      image: 'DR'
    },
    {
      name: 'Pendeta James Thompson',
      role: 'Mantan Gembala',
      content: 'GPDI Persadamas mewujudkan arti keluarga gereja yang sesungguhnya. Kasih, dukungan, dan komitmen untuk melayani sesama sangat menginspirasi.',
      rating: 5,
      image: 'JT'
    },
    {
      name: 'Rebecca Kim',
      role: 'Koordinator Sukarelawan',
      content: 'Kesempatan untuk melayani dan membuat perbedaan dalam komunitas kami telah memperkaya hidup saya dengan cara yang tidak pernah saya bayangkan.',
      rating: 5,
      image: 'RK'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Kata Mereka Tentang Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Dengarkan dari hati keluarga gereja kami tentang pengalaman mereka 
            dan dampak GPDI Persadamas dalam kehidupan mereka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
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
                &quot;{testimonial.content}&quot;
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
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Siap Berbagi Cerita Anda?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Bergabunglah dengan komunitas kami dan jadilah bagian dari keluarga yang saling mendukung, 
              memberi semangat, dan bertumbuh bersama dalam iman.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Kunjungi Kami Minggu Ini
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
