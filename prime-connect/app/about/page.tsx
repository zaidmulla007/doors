"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Award, Factory, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
    const { t } = useLanguage();

    const timeline = [
        { year: t('aboutPage.timeline1Year'), title: t('aboutPage.timeline1Title'), description: t('aboutPage.timeline1Desc') },
        { year: t('aboutPage.timeline2Year'), title: t('aboutPage.timeline2Title'), description: t('aboutPage.timeline2Desc') },
        { year: t('aboutPage.timeline3Year'), title: t('aboutPage.timeline3Title'), description: t('aboutPage.timeline3Desc') },
    ];

    const certifications = [
        t('aboutPage.cert1'),
        t('aboutPage.cert2'),
        t('aboutPage.cert3'),
        t('aboutPage.cert4'),
    ];

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
                            {t('aboutPage.badge')}
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="text-gray-900 mb-6">
                            {t('aboutPage.title')} <span className="gradient-text">{t('aboutPage.titleHighlight')}</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-8">
                            {t('aboutPage.description')}
                        </motion.p>
                        <motion.div variants={fadeInUp}>
                            <Link href="/contact" className="btn-primary">
                                {t('aboutPage.contactUs')}
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
                                {t('aboutPage.storyTitle')} <span className="gradient-text">{t('aboutPage.storyHighlight')}</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-gray-600 mb-6 text-lg">
                                {t('aboutPage.storyP1')}
                            </motion.p>
                            <motion.p variants={fadeInUp} className="text-gray-600 mb-6">
                                {t('aboutPage.storyP2')}
                            </motion.p>
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-8 mt-8">
                                <div className="text-center">
                                    <span className="text-4xl font-bold gradient-text">25+</span>
                                    <p className="text-gray-500 text-sm">{t('aboutPage.yearsExp')}</p>
                                </div>
                                <div className="text-center">
                                    <span className="text-4xl font-bold gradient-text">6</span>
                                    <p className="text-gray-500 text-sm">{t('aboutPage.factories')}</p>
                                </div>
                                <div className="text-center">
                                    <span className="text-4xl font-bold gradient-text">2</span>
                                    <p className="text-gray-500 text-sm">{t('aboutPage.countries')}</p>
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
                                        <h3 className="text-2xl font-bold text-gray-800">{t('aboutPage.companyName')}</h3>
                                        <p className="text-gray-600">{t('aboutPage.companyTagline')}</p>
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
                            {t('aboutPage.journeyTitle')} <span className="gradient-text">{t('aboutPage.journeyHighlight')}</span>
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
                            {t('aboutPage.certTitle')} <span className="gradient-text">{t('aboutPage.certHighlight')}</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
                            {t('aboutPage.certDesc')}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group"
                            >
                                <div className="relative aspect-[1/1.4] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white mb-6 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 cursor-zoom-in">
                                    <Image
                                        src={`/certificates/${index + 1}.png`}
                                        alt={cert}
                                        fill
                                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="text-center px-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                                        <Award className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <p className="font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                                        {cert}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Global Network Section */}
            <section className="section-padding bg-gray-50/50">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeInUp} className="text-gray-900 mb-4">
                            {t('global.sectionTitle')} <span className="gradient-text">{t('global.headingGradient')}</span>
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
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {['doorUAE', 'wpc', 'woodenDoor', 'cabinet', 'steelDoor', 'fireproof'].map((key) => (
                            <motion.div
                                key={key}
                                variants={fadeInUp}
                                className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                                        <Factory className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                            {t(`global.factories.${key}.type`)}
                                        </h4>
                                        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span>{t(`global.factories.${key}.city`)}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-20">
                <div className="container-custom text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-white mb-4">
                            {t('aboutPage.ctaTitle')}
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-blue-100 max-w-2xl mx-auto mb-8">
                            {t('aboutPage.ctaDesc')}
                        </motion.p>
                        <motion.div variants={fadeInUp}>
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                                {t('aboutPage.ctaButton')}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
