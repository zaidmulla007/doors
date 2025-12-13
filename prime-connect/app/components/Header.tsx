"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const corePanelOptions = [
        { name: "Melamine Faced Plywood", href: "/product/melamine-faced-plywood" },
        { name: "Film Faced Plywood", href: "/product/film-faced-plywood" },
        { name: "Melamine Faced MDF Panels", href: "/product/melamine-faced-mdf-panels" },
        { name: "FILM FACED MDF PANELS", href: "/product/film-faced-mdf-panels" },
        { name: "Core Panel Plywood", href: "/product/core-panel-plywood" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Core Panels", href: "/products?category=Core Panels", hasDropdown: true },
        { name: "Categories", href: "/categories" },
        { name: "Products", href: "/products" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-lg shadow-md py-3" : "bg-white/80 backdrop-blur-sm py-5"
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
                            Prime Connects
                        </span>
                        <span className="text-[10px] text-gray-500 tracking-wider">Doors & Cabinet Solutions</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors py-2 flex items-center gap-1"
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.hasDropdown && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64"
                                        >
                                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
                                                {corePanelOptions.map((option) => (
                                                    <Link
                                                        key={option.name}
                                                        href={option.href}
                                                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                                                    >
                                                        {option.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Action Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/contact" className="btn-primary">
                        Get Quote
                    </Link>
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
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                                        className="text-lg font-medium text-gray-900 block"
                                    >
                                        {link.name}
                                    </Link>
                                    {link.hasDropdown && (
                                        <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
                                            {corePanelOptions.map(option => (
                                                <Link
                                                    key={option.name}
                                                    href={option.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block text-gray-600 text-sm py-1"
                                                >
                                                    {option.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary text-center mt-4">
                                Get Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
