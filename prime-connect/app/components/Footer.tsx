"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const sitemapLinks = [
        { name: t('header.home'), href: "/" },
        { name: t('header.about'), href: "/about" },
        { name: t('header.products'), href: "/products" },
        { name: t('header.categories'), href: "/categories" },
        { name: t('header.contact'), href: "/contact" },
    ];

    return (
        <footer className="relative bg-gray-900 text-white overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative container-custom pt-32 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <Image
                                src="/logo.png"
                                alt="Prime Connects Logo"
                                width={48}
                                height={48}
                                className="w-12 h-12 object-contain brightness-0 invert"
                            />
                            <div>
                                <span className="text-xl font-bold">Prime Connects</span>
                                <p className="text-xs text-white">Doors & Cabinet Solutions</p>
                            </div>
                        </Link>
                        <p className="text-white text-sm leading-relaxed mb-6">
                            {t('hero.description')}
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                        >
                            {t('footer.getInTouch')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 relative inline-block">
                            {t('footer.sitemap')}
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                        </h4>
                        <ul className="space-y-3">
                            {sitemapLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 relative inline-block">
                            {t('footer.contactUs')}
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span className="text-white text-sm">
                                    {t('footer.address')}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <a
                                    href="tel:+971065733816"
                                    className="text-white/80 hover:text-white transition-colors text-sm"
                                >
                                    +971 06 573 3816
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <a
                                    href="mailto:info@primeconnects.ae"
                                    className="text-white/80 hover:text-white transition-colors text-sm"
                                >
                                    info@primeconnects.ae
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 relative inline-block">
                            {t('footer.ourCompany')}
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                        </h4>
                        <p className="text-white text-sm mb-6">
                            {t('footer.companyDesc')}
                        </p>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <span className="text-3xl font-bold gradient-text">25+</span>
                                <p className="text-xs text-white">{t('hero.stats.years')}</p>
                            </div>
                            <div className="text-center">
                                <span className="text-3xl font-bold gradient-text">6</span>
                                <p className="text-xs text-white">{t('hero.stats.factories')}</p>
                            </div>
                            <div className="text-center">
                                <span className="text-3xl font-bold gradient-text">2</span>
                                <p className="text-xs text-white">{t('hero.stats.countries')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-gray-800 flex justify-center items-center gap-2">
                    <p className="text-white text-sm">
                        © {currentYear} {t('footer.rights')} | Powered By{' '}
                        <a
                            href="https://zetacoding.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Zetacoding
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
