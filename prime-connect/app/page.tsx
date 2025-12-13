"use client";

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
} from "lucide-react";

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

// Sectors data
const sectors = [
  { icon: Building2, title: "Commercial Buildings", desc: "Office towers, retail, mixed-use developments" },
  { icon: Hotel, title: "Hospitality", desc: "Hotels, resorts, serviced apartments" },
  { icon: GraduationCap, title: "Education", desc: "Schools, universities, training centers" },
  { icon: Stethoscope, title: "Healthcare", desc: "Hospitals, clinics, labs" },
  { icon: Factory, title: "Industrial", desc: "Warehouses, plants, logistics hubs" },
  { icon: Home, title: "Residential", desc: "Villas, apartments, communities" },
];

// Features data
const features = [
  { icon: FlaskConical, title: "Advanced R&D", desc: "In-house material testing and continuous product improvement for demanding environments." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "ISO-aligned processes, batch traceability, and multi-stage inspections at every factory." },
  { icon: Settings, title: "Custom Manufacturing", desc: "Door sizes, cores, finishes, and cabinet modules tailored to architect/designer specs." },
  { icon: FileCheck, title: "Compliance & Safety", desc: "Fire-rating options and regional code compliance supported by documentation." },
  { icon: Ruler, title: "Precision & Fit", desc: "CNC machining and controlled tolerances ensure clean installation and long-term stability." },
  { icon: Layers, title: "Material Options", desc: "MDF, MR MDF, WPC, marine & construction plywood, melamine/film-faced boards." },
];

// Factories data
const factories = [
  { country: "UAE", city: "United Arab Emirates", type: "Door Factory", flag: "🇦🇪" },
  { country: "China", city: "Jiangxi, China", type: "WPC Factory", flag: "🇨🇳" },
  { country: "China", city: "Zhejiang, China", type: "Wooden Door Factory", flag: "🇨🇳" },
  { country: "China", city: "Zhejiang, China", type: "Cabinet Factory", flag: "🇨🇳" },
  { country: "China", city: "Zhejiang, China", type: "Steel Entrance Door Factory", flag: "🇨🇳" },
  { country: "China", city: "Shanghai, China", type: "Fireproof Door Factory", flag: "🇨🇳" },
];

// Product categories
const categories = [
  { name: "Doors", image: "/products/doors.jpg", count: "50+ Products" },
  { name: "Panels", image: "/products/panels.jpg", count: "30+ Products" },
  { name: "Cabinetry", image: "/products/cabinets.jpg", count: "40+ Products" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-indigo-400/15 rounded-full blur-2xl"
        />

        <div className="relative container-custom text-center z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-sm font-medium text-blue-700 mb-4">
                25+ Years of Manufacturing Excellence
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="mb-6">
              <span className="block text-gray-900">A Global Legacy in</span>
              <span className="gradient-text">Manufacturing Excellence</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            >
              Multinational manufacturer of doors, panels, and cabinetry serving commercial,
              residential, hospitality, education, and healthcare projects across UAE and China.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/about" className="btn-primary">
                Discover More
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/products" className="btn-secondary">
                Explore Products
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
            >
              {[
                { value: "6", label: "Factories" },
                { value: "2", label: "Countries" },
                { value: "25+", label: "Years" },
                { value: "1000+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">{stat.value}</span>
                  <p className="text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
            />
          </div>
        </motion.div>
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
                About Prime Connects
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mb-6 text-gray-900">
                Building Tomorrow's Spaces with{" "}
                <span className="gradient-text">Quality & Innovation</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-6 text-lg">
                Primeconnects Doors & Cabinets Solutions is a multinational enterprise
                integrating manufacturing and trade, with a strong legacy of over 25 years
                in the industry. Originally established in China, our company has built a
                reputation for quality and innovation in architectural decoration and
                construction materials.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
                With a fully equipped manufacturing facility in the UAE, we proudly serve
                the region with premium-quality doors, panels, and cabinetry — supported by
                advanced R&D, skilled professionals, and a network of six factories across
                China and the UAE.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/about" className="btn-primary">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
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
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                      <Image src="/logo.png" alt="Prime Connects" width={80} height={80} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Prime Connects</h3>
                    <p className="text-gray-600">Manufacturing Excellence Since 1999</p>
                  </div>
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
              Our Solutions
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-gray-900 mb-4">
              Explore Our <span className="gradient-text">Product Range</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              From precision-built doors to engineered panels and bespoke cabinetry,
              we deliver reliable solutions for residential and commercial projects.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {["Doors", "Panels", "Cabinetry"].map((category, index) => (
              <motion.div
                key={category}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-lg"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {index === 0 && <Home className="w-10 h-10 text-blue-600" />}
                        {index === 1 && <Layers className="w-10 h-10 text-purple-600" />}
                        {index === 2 && <Settings className="w-10 h-10 text-indigo-600" />}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category}</h3>
                  <p className="text-gray-500 text-sm mb-4">Premium quality {category.toLowerCase()} for all applications</p>
                  <Link
                    href={`/categories`}
                    className="inline-flex items-center text-blue-600 font-medium group-hover:gap-2 gap-1 transition-all"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4" />
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
              View All Categories
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
              Global Network
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-gray-900 mb-4">
              <span className="gradient-text">6 Factories. 2 Countries.</span>
              <br />One Standard of Excellence.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              Primeconnects operates a multinational manufacturing network across the UAE and China,
              ensuring consistent quality, reliable supply, and regional responsiveness.
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
                      {factory.type}
                    </h3>
                    <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {factory.city}
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
              Contact Sales
              <ArrowRight className="w-5 h-5" />
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
              Industries We Serve
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-white mb-4">
              Trusted Across <span className="gradient-text">Sectors</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">
              From commercial towers to private villas, Primeconnects delivers durable doors,
              engineered panels, and cabinet systems tailored to each application.
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
                <h3 className="text-xl font-bold text-white mb-2">{sector.title}</h3>
                <p className="text-gray-400">{sector.desc}</p>
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
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/products" className="btn-secondary !border-white/20 !text-black hover:!bg-white/10">
              View Products
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
              Why Choose Us
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-gray-900 mb-4">
              Engineered for Performance.
              <br /><span className="gradient-text">Built for Longevity.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              From material research to final inspection, Primeconnects combines advanced R&D,
              stringent quality assurance, and tailored manufacturing to meet project specifications with confidence.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start Your Project?</h3>
                <p className="text-gray-600">Multi-factory QA checkpoints • Rapid prototyping • Technical drawings & submittals support</p>
              </div>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-primary">
                  Request Specs
                </Link>
                <Link href="/products" className="btn-secondary">
                  View Products
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
