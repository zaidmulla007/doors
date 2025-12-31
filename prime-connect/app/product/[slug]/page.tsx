import { products } from "../../data";
import ProductPageClient from "./ProductPageClient";

// Generate static params for all products
export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export const dynamicParams = false;

export default function ProductPage() {
    return <ProductPageClient />;
}
