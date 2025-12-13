"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Grid, List, Package, Filter, ChevronDown, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "../data";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

function ProductsContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category");

    const [activeCategory, setActiveCategory] = useState(initialCategory || "Doors Hardware Accessories");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const filteredProducts = activeCategory === "All" || !activeCategory
        ? products
        : products.filter(p => p.category === activeCategory || p.category === categories.find(c => c.slug === activeCategory)?.name);

    return (
        <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Sidebar Filters */}
            <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full lg:w-64 flex-shrink-0 bg-white"
            >
                <div className="mb-6 flex items-center gap-2 text-lg font-bold text-gray-900">
                    <Filter className="w-5 h-5" />
                    Filters
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm text-gray-500 mb-2">Category</label>
                        <div className="relative">
                            <select
                                value={activeCategory}
                                onChange={(e) => setActiveCategory(e.target.value)}
                                className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            >
                                <option value="All">All Categories</option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-500 mb-2">Order by</label>
                        <div className="relative">
                            <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                                <option>Name (A → Z)</option>
                                <option>Name (Z → A)</option>
                                <option>Newest First</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-500 mb-2">Per page</label>
                        <div className="relative">
                            <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                                <option>15</option>
                                <option>30</option>
                                <option>50</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    <button
                        onClick={() => setActiveCategory("All")}
                        className="w-full py-3 border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    >
                        Reset
                    </button>

                    <Link href="/categories" className="block text-center text-sm text-gray-500 underline hover:text-blue-600 mt-4">
                        Browse categories
                    </Link>
                </div>
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1 w-full">

                {/* Top Info Bar */}
                <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-medium text-gray-500">
                    <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">Page: 1</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">Per page: 15</span>
                    {activeCategory !== "All" && (
                        <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">
                            Category: {activeCategory.toLowerCase().replace(/ /g, '-')}
                        </span>
                    )}
                    <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">Total: {filteredProducts.length}</span>
                </div>

                {/* List Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <p className="text-gray-500">Showing {filteredProducts.length} of {filteredProducts.length}</p>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2 rounded-lg border ${viewMode === "grid" ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200"}`}
                        >
                            <Grid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`p-2 rounded-lg border ${viewMode === "list" ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200"}`}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden ${viewMode === "list" ? "flex items-center p-4 gap-6" : "p-4"
                                }`}
                        >
                            <Link href={`/product/${product.slug}`} className={`block relative bg-gray-50 rounded-lg overflow-hidden ${viewMode === "grid" ? "aspect-square mb-4" : "w-24 h-24 flex-shrink-0"}`}>
                                <Image
                                    src={product.images[0] || "/placeholder.jpg"}
                                    alt={product.name}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </Link>

                            <div>
                                <Link href={`/product/${product.slug}`}>
                                    <h3 className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                        {product.name}
                                    </h3>
                                </Link>
                                {viewMode === "list" && (
                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4 mt-12">
                    <button disabled className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-200 text-gray-400 text-sm font-medium disabled:opacity-50">
                        <ChevronLeft className="w-4 h-4" />
                        Prev
                    </button>
                    <span className="text-sm font-medium text-gray-600">Page 1 of 1</span>
                    <button disabled className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-200 text-gray-400 text-sm font-medium disabled:opacity-50">
                        Next
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default function ProductsPage() {
    return (
        <>
            <section className="bg-white pt-32 pb-8 border-b border-gray-100">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
                    <p className="text-gray-500">Browse all products</p>
                </div>
            </section>

            <section className="section-padding bg-gray-50 min-h-screen">
                <div className="container-custom">
                    <Suspense fallback={<div>Loading products...</div>}>
                        <ProductsContent />
                    </Suspense>
                </div>
            </section>
        </>
    );
}
