"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Globe, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { navigationCategories } from "../lib/constants";

// Social Media & Contact Data
const contactInfo = {
    emails: ["info@primeconnects.ae", "abde@primeconnects.ae"],
    phones: ["+971 58 912 6137", "+971 6 573 3816"],
};

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "TikTok", icon: TikTokIcon, href: "https://tiktok.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];


export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isBrochuresOpen, setIsBrochuresOpen] = useState(false);

    const languages = [
        { code: "en", label: "English" },
        { code: "ar", label: "Arabic" },
        { code: "zh", label: "Chinese" }
    ];

    const currentLangLabel = languages.find(l => l.code === language)?.label || "English";

    // Brochures data with translations
    const brochures = [
        { name: t('br.general'), file: "/brochures/PrimeconnectsGeneralCatalogue.pdf" },
        { name: t('br.doors'), file: "/brochures/PrimeConnectsDoorscatalogue.pdf" },
        { name: t('br.locks'), file: "/brochures/PrimeconnectsCylinderLocks.pdf" },
        { name: t('br.hinges'), file: "/brochures/PrimeconnectsHinges.pdf" },
        { name: t('br.smartLocks'), file: "/brochures/PrimeconnectsSmartRimLocks.pdf" },
    ];



    // Use shared navigation categories
    const productCategories = navigationCategories;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t('header.home'), href: "/" },
        { name: t('header.products'), href: "/products", hasDropdown: true },
        { name: t('header.about'), href: "/about" },
        { name: t('header.contact'), href: "/contact" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs py-2 hidden lg:block">
                <div className="container-custom flex justify-center items-center gap-6">
                    <div className="flex items-center gap-4">
                        {contactInfo.emails.map(email => (
                            <a key={email} href={`mailto:${email}`} className="flex items-center gap-1 hover:text-gray-200">
                                <Mail size={14} /> {email}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        {contactInfo.phones.map(phone => (
                            <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-1 hover:text-gray-200">
                                <Phone size={14} /> {phone}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                        {socialLinks.map(social => (
                            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                                <social.icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <motion.header
                className={`w-full transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-lg shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
                    }`}
            >
                <div className="container-custom flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10">
                            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600`}>
                                {t('header.logoName')}
                            </span>
                            <span className="text-[10px] text-gray-500 tracking-wider">{t('header.logoTagline')}</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                            return (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                                    onMouseLeave={() => {
                                        if (link.hasDropdown) {
                                            setActiveDropdown(null);
                                            setActiveCategory(null);
                                        }
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`font-medium text-sm transition-all py-2 flex items-center gap-1 relative ${isActive
                                            ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500"
                                            : "text-gray-600 hover:text-blue-600"
                                            }`}
                                    >
                                        {link.name}
                                        {link.hasDropdown && <ChevronDown className="w-4 h-4" />}

                                        {/* Animated Underline */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </Link>

                                    {/* Mega Menu Dropdown */}
                                    {link.hasDropdown && (
                                        <AnimatePresence>
                                            {activeDropdown === link.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute left-0 top-full pt-4 z-50"
                                                >
                                                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex shadow-blue-900/5">
                                                        {/* Left Sidebar: Categories */}
                                                        <div className="w-64 bg-white p-2 flex flex-col gap-1">
                                                            {productCategories.map((category) => {
                                                                if (category.name === "Color Card") {
                                                                    return (
                                                                        <Link
                                                                            key={category.name}
                                                                            href={`/product/${category.items[0]?.slug || 'color-card'}`}
                                                                            onMouseEnter={() => setActiveCategory(null)}
                                                                            className="flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                                                        >
                                                                            <div className="flex items-center gap-3">
                                                                                <span className="font-medium text-sm">{category.name}</span>
                                                                            </div>
                                                                        </Link>
                                                                    );
                                                                }
                                                                return (
                                                                    <div
                                                                        key={category.name}
                                                                        onMouseEnter={() => setActiveCategory(category.name)}
                                                                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 ${activeCategory === category.name
                                                                            ? "bg-blue-50 text-blue-600"
                                                                            : "text-gray-600 hover:bg-gray-50"
                                                                            }`}
                                                                    >
                                                                        <div className="flex items-center gap-3">
                                                                            <span className="font-medium text-sm">{category.name}</span>
                                                                        </div>
                                                                        {activeCategory === category.name && (
                                                                            <ChevronDown className="w-4 h-4 rotate-[-90deg] text-blue-600" />
                                                                        )}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>

                                                        {/* Right Content: Items - Only Visible if Category Active */}
                                                        {activeCategory && (
                                                            <div className="w-[800px] p-6 bg-gray-50/50 border-l border-gray-100 min-h-[300px]">
                                                                <div className="h-full flex flex-col">
                                                                    <div className="mb-4 pb-3 border-b border-gray-200 flex items-baseline justify-between">
                                                                        <h3 className="text-xl font-bold text-gray-900">
                                                                            {activeCategory}
                                                                        </h3>
                                                                        <Link
                                                                            href={`/products?category=${activeCategory}`}
                                                                            className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                                                                        >
                                                                            View All <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                                                                        </Link>
                                                                    </div>

                                                                    <div className="grid grid-cols-3 gap-4 content-start">
                                                                        {productCategories
                                                                            .find(c => c.name === activeCategory)
                                                                            ?.items.map((item, idx) => (
                                                                                <Link
                                                                                    key={idx}
                                                                                    href={`/product/${item.slug}`}
                                                                                    className="group flex items-center gap-3 p-2 rounded-lg bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all"
                                                                                >
                                                                                    <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors" />
                                                                                    <span className="text-sm text-gray-700 group-hover:text-blue-700 font-medium transition-colors">
                                                                                        {item.name}
                                                                                    </span>
                                                                                </Link>
                                                                            ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-sm text-gray-600 hover:border-blue-500 transition-colors"
                            >
                                <Globe size={16} />
                                {currentLangLabel}
                                <ChevronDown size={14} />
                            </button>
                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
                                        onMouseLeave={() => setIsLangOpen(false)}
                                    >
                                        {languages.map(lang => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setLanguage(lang.code as any);
                                                    setIsLangOpen(false);
                                                }}
                                                className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 text-gray-700"
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Download Brochures Button */}
                        <button
                            onClick={() => setIsBrochuresOpen(true)}
                            className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                        >
                            <Download size={16} />
                            {t('header.downloadBrochures')}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="container-custom py-6 flex flex-col gap-4">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                                    return (
                                        <div key={link.name}>
                                            <Link
                                                href={link.href}
                                                onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                                                className={`text-lg font-medium block transition-all ${isActive
                                                    ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500"
                                                    : "text-gray-900"
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                            {link.hasDropdown && (
                                                <div className="mt-3 space-y-4">
                                                    {productCategories.map((category, catIndex) => (
                                                        <div key={catIndex} className="pl-4 border-l-2 border-blue-200">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <span className="font-medium text-gray-800 text-sm">{category.name}</span>
                                                            </div>
                                                            <div className="pl-4 space-y-1">
                                                                {category.items.map((item, itemIndex) => (
                                                                    <Link
                                                                        key={itemIndex}
                                                                        href={`/product/${item.slug}`}
                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                        className="block text-gray-600 text-xs py-1 hover:text-blue-600"
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}

                                {/* Mobile Contact Info & Language */}
                                <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        {contactInfo.emails.map(email => (
                                            <a key={email} href={`mailto:${email}`} className="text-sm text-gray-600 flex items-center gap-2">
                                                <Mail size={16} /> {email}
                                            </a>
                                        ))}
                                        {contactInfo.phones.map(phone => (
                                            <a key={phone} href={`tel:${phone}`} className="text-sm text-gray-600 flex items-center gap-2">
                                                <Phone size={16} /> {phone}
                                            </a>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-2">
                                        {socialLinks.map(social => (
                                            <a key={social.name} href={social.href} className="text-gray-500 hover:text-blue-600">
                                                {social.icon && <social.icon size={20} />}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Brochures Modal */}
            <AnimatePresence>
                {isBrochuresOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                        onClick={() => setIsBrochuresOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-xl shadow-2xl w-full max-w-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-start justify-between p-4 border-b border-gray-100">
                                <div>
                                    <h4 className="text-base font-semibold text-gray-900">{t('header.brochuresTitle')}</h4>
                                    <p className="text-gray-500 text-xs mt-0.5">
                                        {t('header.brochuresDesc')}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsBrochuresOpen(false)}
                                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X size={18} className="text-gray-500" />
                                </button>
                            </div>

                            {/* Brochures List */}
                            <div className="p-4 space-y-2">
                                {brochures.map((brochure, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/50 transition-all"
                                    >
                                        <span className="text-gray-800 text-sm">{brochure.name}</span>
                                        <a
                                            href={brochure.file}
                                            download
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 rounded-md text-xs font-medium transition-colors"
                                        >
                                            <Download size={14} />
                                            {t('header.download')}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
