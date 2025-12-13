"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Award, CheckCircle } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const timeline = [
    { year: "1999", title: "Founded in China", description: "Established our first manufacturing facility in China, marking the beginning of our journey in architectural solutions." },
    { year: "2015", title: "Expanded Product Lines", description: "Diversified our portfolio to include comprehensive door, panel, and cabinetry solutions for various sectors." },
    { year: "2024", title: "UAE Manufacturing Unit", description: "Opened our state-of-the-art facility in UAE to better serve the Middle East and North Africa region." },
];

const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001 Environmental Management",
    "Fire Safety Compliance",
    "Regional Building Codes",
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
                <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

                <div className="container-custom relative">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-3xl"
                    >
                        <motion.span variants={fadeInUp} className="text-blue-600 font-semibold mb-4 block">
                            About Us
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="text-gray-900 mb-6">
                            About <span className="gradient-text">Primeconnects</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-8">
                            A multinational manufacturer of doors, panels, and cabinetry with 25+ years of excellence.
                        </motion.p>
                        <motion.div variants={fadeInUp}>
                            <Link href="/contact" className="btn-primary">
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeInUp} className="text-gray-900 mb-6">
                                Our Story & <span className="gradient-text">Legacy</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-gray-600 mb-6 text-lg">
                                Primeconnects integrates manufacturing and trade with a legacy of innovation and quality.
                                Originally established in China, we expanded with a fully equipped UAE facility to serve
                                the region with premium solutions.
                            </motion.p>
                            <motion.p variants={fadeInUp} className="text-gray-600 mb-6">
                                Today, we combine advanced R&D, disciplined quality control, and customer-first service
                                across every project. Our mission is to deliver durable, precision-crafted products that
                                combine technology, craftsmanship, and design excellence.
                            </motion.p>
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-8 mt-8">
                                <div className="text-center">
                                    <span className="text-4xl font-bold gradient-text">25+</span>
                                    <p className="text-gray-500 text-sm">Years Experience</p>
                                </div>
                                <div className="text-center">
                                    <span className="text-4xl font-bold gradient-text">6</span>
                                    <p className="text-gray-500 text-sm">Factories</p>
                                </div>
                                <div className="text-center">
                                    <span className="text-4xl font-bold gradient-text">2</span>
                                    <p className="text-gray-500 text-sm">Countries</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <Image src="/logo.png" alt="Prime Connects" width={150} height={150} className="mx-auto mb-6" />
                                        <h3 className="text-2xl font-bold text-gray-800">Prime Connects</h3>
                                        <p className="text-gray-600">Excellence in Every Detail</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-2xl -z-10" />
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-2xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeInUp} className="text-gray-900 mb-4">
                            Our <span className="gradient-text">Journey</span>
                        </motion.h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex gap-6 mb-12 last:mb-0"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    {index < timeline.length - 1 && (
                                        <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 mt-4" />
                                    )}
                                </div>
                                <div className="flex-1 pb-8">
                                    <span className="text-blue-600 font-bold text-lg">{item.year}</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeInUp} className="text-gray-900 mb-4">
                            Certifications & <span className="gradient-text">Compliance</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
                            Our processes align with international standards for safety and quality.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <p className="font-medium text-gray-800">{cert}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-white mb-4">
                            Ready to Work With Us?
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-blue-100 max-w-2xl mx-auto mb-8">
                            Let's discuss how we can help bring your project to life with our premium doors, panels, and cabinetry solutions.
                        </motion.p>
                        <motion.div variants={fadeInUp}>
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                                Get in Touch
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
