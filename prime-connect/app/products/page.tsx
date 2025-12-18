"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "../data";
import { navigationCategories } from "../lib/constants";
import { useLanguage } from "../context/LanguageContext";
import ProductSidebar from "../components/ProductSidebar";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

// Helper function to get translated text
const getTranslated = (value: string | { en: string; ar: string; zh: string }, lang: string): string => {
    if (typeof value === 'string') return value;
    return value[lang as keyof typeof value] || value.en;
};

function ProductsContent() {
    const { t, language } = useLanguage();
    const searchParams = useSearchParams();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);

    // Get filters from URL
    const activeCategory = searchParams.get('category');
    const activeSlug = searchParams.get('slug');

    // Filter and Flatten products into individual variants
    const filteredAndSortedItems = useMemo(() => {
        let sourceProducts = [...products];

        // 1. Filter high-level products first
        if (activeCategory) {
            sourceProducts = sourceProducts.filter(p => {
                const catEn = typeof p.category === 'string' ? p.category : p.category.en;
                return catEn.toLowerCase().trim().replace(/\s+/g, '-') === activeCategory.toLowerCase().trim();
            });
        }

        if (activeSlug) {
            sourceProducts = sourceProducts.filter(p => p.slug === activeSlug);
        }

        // 2. Flatten into variants
        let items: any[] = [];
        sourceProducts.forEach(p => {
            const productVars = p.variants || [];
            if (productVars.length > 0) {
                productVars.forEach(v => {
                    items.push({
                        ...v,
                        id: `${p.id}-${v.name}`,
                        parentProduct: p,
                        category: p.category
                    });
                });
            } else {
                // If no variants, just show the product itself
                items.push({
                    name: getTranslated(p.name, language),
                    image: p.images[0],
                    id: p.id,
                    parentProduct: p,
                    category: p.category
                });
            }
        });

        // 3. Sort A-Z by item name
        return items.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            return nameA.localeCompare(nameB, language);
        });
    }, [language, activeCategory, activeSlug]);

    // Get display name for active filter
    const activeFilterName = useMemo(() => {
        if (activeSlug) {
            const product = products.find(p => p.slug === activeSlug);
            return product ? getTranslated(product.name, language) : activeSlug;
        }
        if (activeCategory) {
            const itemWithCat = filteredAndSortedItems[0];
            if (itemWithCat) {
                return getTranslated(itemWithCat.category, language);
            }
            // Fallback to navigation categories if no items found
            const navCat = navigationCategories.find(c => c.slug === activeCategory);
            if (navCat) {
                return getTranslated(navCat.name as any, language);
            }
            return activeCategory;
        }
        return null;
    }, [activeSlug, activeCategory, language, filteredAndSortedItems]);

    return (
        <div className="flex flex-col lg:flex-row gap-10">
            {/* Mobile Filter Toggle */}
            <button
                onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                className="lg:hidden w-full mb-6 flex items-center justify-between bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm transition-all hover:border-blue-200"
            >
                <div className="flex items-center gap-3">
                    <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                        {t('sidebar.productCenter')}
                    </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isMobileSidebarOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Sidebar - Mobile Drawer-like */}
            <AnimatePresence>
                {isMobileSidebarOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden mb-10 overflow-hidden"
                    >
                        <ProductSidebar
                            activeSlug={activeSlug || undefined}
                            activeCategory={activeCategory || undefined}
                            filterMode={true}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
                <div className="sticky top-32">
                    <ProductSidebar activeSlug={activeSlug || undefined} activeCategory={activeCategory || undefined} filterMode={true} />
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Active Filters Display */}
                {activeFilterName && (
                    <div className="mb-8 flex items-center justify-between bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="flex items-center gap-3">
                            <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-gray-500 font-medium">{t('productsPage.showing')}</span>
                            <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm shadow-blue-200">
                                {activeFilterName}
                            </span>
                        </div>
                        <Link
                            href="/products"
                            className="text-[10px] font-bold text-gray-400 hover:text-red-500 uppercase tracking-widest transition-colors flex items-center gap-1"
                        >
                            <span>✕</span> {t('productsPage.clearFilters')}
                        </Link>
                    </div>
                )}

                {filteredAndSortedItems.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {filteredAndSortedItems.map((item) => {
                            const itemName = item.name;
                            const parentName = getTranslated(item.parentProduct.name, language);

                            return (
                                <motion.div
                                    key={item.id}
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden group cursor-pointer"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <div className="block relative bg-gray-50 aspect-square overflow-hidden mb-3">
                                        <Image
                                            src={item.image || "/placeholder.jpg"}
                                            alt={itemName}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                                    </div>

                                    <div className="p-3 md:p-4">
                                        <div className="mb-1">
                                            <span className="text-[8px] md:text-[9px] font-bold text-blue-600 uppercase tracking-widest opacity-70">
                                                {parentName}
                                            </span>
                                        </div>
                                        <h4 className="text-xs md:text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-3">
                                            {itemName}
                                        </h4>
                                        <div className="flex items-center gap-1 text-blue-600 text-[10px] font-bold">
                                            <span>{t('productsPage.viewDetails')}</span>
                                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl p-20 text-center border border-dashed border-gray-200">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="w-8 h-8 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{t('productsPage.noResultsTitle')}</h3>
                        <p className="text-gray-500 mb-8">{t('productsPage.noResultsDesc')}</p>
                        <Link href="/products" className="btn-primary inline-flex">
                            {t('productsPage.viewAllProducts')}
                        </Link>
                    </div>
                )}
            </div>

            {/* Inquiry Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl grid md:grid-cols-2 h-auto max-h-[90vh]"
                        >
                            {/* Image Section */}
                            <div className="relative h-64 md:h-auto bg-gray-100 min-h-[300px]">
                                <Image
                                    src={selectedItem.image || "/placeholder.jpg"}
                                    alt={selectedItem.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Info & Inquiry Section */}
                            <div className="p-8 flex flex-col h-full max-h-[90vh] overflow-y-auto custom-scrollbar">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-1 block">
                                            {getTranslated(selectedItem.parentProduct.name, language)}
                                        </span>
                                        <h3 className="text-2xl font-extrabold text-gray-900">{selectedItem.name}</h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {selectedItem.parentProduct.slug === 'color-card' ? t('productDetail.finishTexture') : t('productDetail.modelDetail')}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                                    </button>
                                </div>

                                {/* Full Description */}
                                <div className="mb-6">
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {getTranslated(selectedItem.parentProduct.description, language)}
                                    </p>
                                </div>

                                {/* Specifications Mini Table (Optional) */}
                                {selectedItem.parentProduct.specifications && (
                                    <div className="mb-6 bg-gray-50 rounded-xl p-4 border border-gray-100">
                                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">{t('productDetail.specifications')}</h4>
                                        <div className="space-y-2">
                                            {Object.entries(selectedItem.parentProduct.specifications).map(([k, v]: [string, any]) => (
                                                <div key={k} className="flex justify-between text-xs py-1 border-b border-gray-100 last:border-0">
                                                    <span className="text-gray-500 capitalize pr-4">{t(`common.productSpecs.${k.toLowerCase().replace(/\s+/g, '')}` as any) || k}:</span>
                                                    <span className="font-semibold text-gray-900 text-right">{v}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Applications (Optional) */}
                                {selectedItem.parentProduct.applications && (
                                    <div className="mb-6">
                                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">{t('productDetail.applications')}</h4>
                                        <ul className="space-y-2">
                                            {((selectedItem.parentProduct.applications as any)[language] || (selectedItem.parentProduct.applications as any).en || []).map((app: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                                                    <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                                    <span>{app}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="space-y-4 pb-4">
                                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                        <h4 className="font-bold text-blue-900 mb-2">
                                            {selectedItem.parentProduct.slug === 'color-card' ? t('productDetail.interestedFinish') : t('productDetail.interestedModel')}
                                        </h4>
                                        <p className="text-sm text-blue-700/80 mb-4 leading-relaxed">
                                            {t('productDetail.fillForm')} <span className="font-extrabold">{selectedItem.name}</span> {t('productDetail.option')}.
                                        </p>
                                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                                            <input
                                                type="text"
                                                placeholder={t('productDetail.yourName')}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                                            />
                                            <div className="grid grid-cols-2 gap-3">
                                                <input
                                                    type="email"
                                                    placeholder={t('productDetail.emailAddress')}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                                                />
                                                <input
                                                    type="tel"
                                                    placeholder={t('productDetail.phoneNumber')}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                                                />
                                            </div>
                                            <textarea
                                                rows={2}
                                                placeholder={t('productDetail.messageRequirements')}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white resize-none"
                                            ></textarea>
                                            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-200 uppercase tracking-widest text-xs">
                                                {t('productDetail.sendInquiry')}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function ProductsPage() {
    const { t } = useLanguage();

    return (
        <main className="bg-gray-50 min-h-screen">
            <section className="bg-white pt-32 pb-12 border-b border-gray-100">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                            <Link href="/" className="hover:text-blue-600 transition-colors">{t('header.home')}</Link>
                            <span className="text-gray-300">/</span>
                            <span className="text-blue-600">{t('header.products')}</span>
                        </nav>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                            {t('productsPage.title')}
                        </h1>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            {t('productsPage.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container-custom">
                    <Suspense fallback={
                        <div className="flex gap-10">
                            <div className="hidden lg:block w-80 h-[600px] bg-gray-100 animate-pulse rounded-2xl" />
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="bg-white h-[400px] animate-pulse rounded-2xl border border-gray-100" />
                                ))}
                            </div>
                        </div>
                    }>
                        <ProductsContent />
                    </Suspense>
                </div>
            </section>
        </main>
    );
}
