'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 relative">
                <Image
                  src="/Logo_GPDI-removebg-preview.png"
                  alt="GPDI Persadamas Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">GPDI Persadamas</h3>
                <p className="text-gray-400 text-sm">Banjarmasin</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Komunitas yang ramah di mana iman bertumbuh, harapan berkembang, dan kasih melimpah. 
              Bergabunglah dengan kami dalam ibadah dan persekutuan.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.instagram.com/gpdipersadamas?igsh=MXV5Y25jYXIyc2xndQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://youtube.com/@gpdipersadamasbanjarmasin?si=p8bLMqy4dYo_ws3y"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Tautan Cepat</h3>
            <ul className="space-y-2">
              {[
                'Tentang Kami',
                'Ibadah Kami',
                'Pelayanan',
                'Acara',
                'Khotbah',
                'Permohonan Doa',
                'Relawan',
                'Donasi'
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Informasi Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Tatah Belayung Baru, Kertak Hanyar<br />
                    Banjarmasin, Kalimantan Selatan 70654
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <p className="text-gray-300 text-sm">(0511) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-gray-300 text-sm">info@gpdipersadamas.org</p>
              </div>
            </div>
          </motion.div>

          {/* Service Times */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Jadwal Ibadah</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium text-sm">Ibadah Minggu</p>
                  <p className="text-gray-300 text-sm">Minggu 08:30 & 16:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium text-sm">Ibadah Tengah Minggu</p>
                  <p className="text-gray-300 text-sm">Rabu 19:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium text-sm">Ibadah Pemuda Remaja</p>
                  <p className="text-gray-300 text-sm">Sabtu 16:00 & 18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium text-sm">Ibadah Sekolah Minggu</p>
                  <p className="text-gray-300 text-sm">Minggu 08:30 & 16:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} GPDI Persadamas Banjarmasin. Semua hak dilindungi. | 
            <a href="#" className="hover:text-white transition-colors duration-200 ml-1">
              Kebijakan Privasi
            </a> | 
            <a href="#" className="hover:text-white transition-colors duration-200 ml-1">
              Syarat Layanan
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
