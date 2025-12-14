"use client";

import { useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Hotel,
  GraduationCap,
  Stethoscope,
  Factory,
  Home,
  FlaskConical,
  ShieldCheck,
  Settings,
  FileCheck,
  Ruler,
  Layers,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Hero slides data
const heroSlides = [
  { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", alt: "Modern wooden doors" },
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80", alt: "Luxury interior doors" },
  { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80", alt: "Modern cabinet solutions" },
  { image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80", alt: "Contemporary home interiors" },
  { image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80", alt: "Premium door designs" },
  { image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1920&q=80", alt: "Manufacturing excellence" },
];

export default function HomePage() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sectors data with keys for translation
  const sectors = [
    { icon: Building2, id: "commercial" },
    { icon: Hotel, id: "hospitality" },
    { icon: GraduationCap, id: "education" },
    { icon: Stethoscope, id: "healthcare" },
    { icon: Factory, id: "industrial" },
    { icon: Home, id: "residential" },
  ];

  // Features data with keys
  const features = [
    { icon: FlaskConical, id: "rnd" },
    { icon: ShieldCheck, id: "qa" },
    { icon: Settings, id: "custom" },
    { icon: FileCheck, id: "compliance" },
    { icon: Ruler, id: "precision" },
    { icon: Layers, id: "materials" },
  ];

  // Factories data - ids map to translation keys (global.factories.*)
  const factories = [
    { id: "doorUAE", flag: "🇦🇪" },
    { id: "wpc", flag: "🇨🇳" },
    { id: "woodenDoor", flag: "🇨🇳" },
    { id: "cabinet", flag: "🇨🇳" },
    { id: "steelDoor", flag: "🇨🇳" },
    { id: "fireproof", flag: "🇨🇳" },
  ];

  const productCategories = [
    { id: 'doors', image: "/products/doors.jpg", icon: Home, color: "blue", index: 0 },
    { id: 'panels', image: "/products/panels.jpg", icon: Layers, color: "purple", index: 1 },
    { id: 'cabinetry', image: "/products/cabinets.jpg", icon: Settings, color: "indigo", index: 2 },
  ];

  return (
    <>
      {/* Hero Section - Image Carousel */}
      <section className="relative h-screen w-full overflow-hidden pt-20">
        {/* Slides */}
        <div className="relative h-full w-full">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 0.7 }}
              className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-blue-600 font-semibold mb-4 block">
                {t('about.sectionTitle')}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mb-6 text-gray-900">
                {t('about.headingStart')} {" "}
                <span className="gradient-text">{t('about.headingGradient')}</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-6 text-lg">
                {t('about.desc1')}
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
                {t('about.desc2')}
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/about" className="btn-primary">
                  {t('about.learnMore')}
                  <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/WecEaqY_9PQ?autoplay=1&mute=1"
                    title="Prime Connects Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-blue-600 font-semibold mb-4 block">
              {t('products.sectionTitle')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-gray-900 mb-4">
              {t('products.headingStart')} <span className="gradient-text">{t('products.headingGradient')}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              {t('products.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {productCategories.map((cat, index) => (
              <motion.div
                key={cat.id}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-lg"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <cat.icon className={`w-10 h-10 text-${cat.color}-600`} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t(`products.categories.${cat.id}.title`)}</h3>
                  <p className="text-gray-500 text-sm mb-4">{t(`products.categories.${cat.id}.desc`)}</p>
                  <Link
                    href={`/categories`}
                    className="inline-flex items-center text-blue-600 font-medium group-hover:gap-2 gap-1 transition-all"
                  >
                    {t('products.explore')}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                </div>
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 transition-colors" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/categories" className="btn-secondary">
              {t('products.viewAll')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />

        <div className="container-custom relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-blue-600 font-semibold mb-4 block">
              {t('global.sectionTitle')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-gray-900 mb-4">
              <span className="gradient-text">{t('global.headingGradient')}</span>
              <br />{t('global.headingEnd')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              {t('global.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {factories.map((factory, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-2xl flex-shrink-0">
                    {factory.flag}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {t(`global.factories.${factory.id}.type`)}
                    </h3>
                    <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {t(`global.factories.${factory.id}.city`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/contact" className="btn-primary">
              {t('global.contactSales')}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="section-padding bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-blue-400 font-semibold mb-4 block">
              {t('sectors.sectionTitle')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-white mb-4">
              {t('sectors.headingStart')} <span className="gradient-text">{t('sectors.headingGradient')}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">
              {t('sectors.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <sector.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t(`sectors.items.${sector.id}.title`)}</h3>
                <p className="text-gray-400">{t(`sectors.items.${sector.id}.desc`)}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="btn-primary">
              {t('sectors.discussProject')}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
            <Link href="/products" className="btn-secondary !border-white/20 !text-black hover:!bg-white/10">
              {t('sectors.viewProducts')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-blue-600 font-semibold mb-4 block">
              {t('features.sectionTitle')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-gray-900 mb-4">
              {t('features.headingStart')}
              <br /><span className="gradient-text">{t('features.headingGradient')}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              {t('features.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-6 group-hover:from-blue-500 group-hover:to-purple-500 transition-all">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`features.items.${feature.id}.title`)}</h3>
                <p className="text-gray-600">{t(`features.items.${feature.id}.desc`)}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('features.cta.title')}</h3>
                <p className="text-gray-600">{t('features.cta.desc')}</p>
              </div>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-primary">
                  {t('features.cta.requestSpecs')}
                </Link>
                <Link href="/products" className="btn-secondary">
                  {t('features.cta.viewProducts')}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
