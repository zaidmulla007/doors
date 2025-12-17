"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationCategories } from "../lib/constants";

interface ProductSidebarProps {
    activeSlug?: string;
}

export default function ProductSidebar({ activeSlug }: ProductSidebarProps) {
    // Determine which category should be open by default based on activeSlug
    const defaultOpenCategory = navigationCategories.find(cat =>
        cat.items.some(item => item.slug === activeSlug)
    )?.name || "Doors"; // Default to "Doors" if no match or generic

    const [openCategories, setOpenCategories] = useState<string[]>([defaultOpenCategory]);

    const toggleCategory = (categoryName: string) => {
        setOpenCategories(prev =>
            prev.includes(categoryName)
                ? prev.filter(c => c !== categoryName)
                : [...prev, categoryName]
        );
    };

    return (
        <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {/* Sidebar Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Product center
                </h4>
            </div>

            {/* Navigation List */}
            <div className="divide-y divide-gray-100">
                {navigationCategories.map((category) => {
                    const isOpen = openCategories.includes(category.name);
                    const isActiveParent = category.items.some(item => item.slug === activeSlug);

                    return (
                        <div key={category.name} className="bg-white">
                            {/* Category Header */}
                            <button
                                onClick={() => toggleCategory(category.name)}
                                className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50
                                    ${isActiveParent ? 'text-blue-600' : 'text-gray-800'}
                                `}
                            >
                                <span className="font-semibold text-base">{category.name}</span>
                                {isOpen ? (
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                ) : (
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                )}
                            </button>

                            {/* Sub-items */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden bg-gray-50/50"
                                    >
                                        <div className="flex flex-col">
                                            {category.items.map((item) => {
                                                const isActive = item.slug === activeSlug;
                                                return (
                                                    <Link
                                                        key={item.slug}
                                                        href={`/product/${item.slug}`}
                                                        className={`
                                                            px-8 py-3 text-sm transition-all border-l-4
                                                            ${isActive
                                                                ? 'border-blue-600 bg-white text-blue-600 font-medium shadow-sm'
                                                                : 'border-transparent text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                                                            }
                                                        `}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
