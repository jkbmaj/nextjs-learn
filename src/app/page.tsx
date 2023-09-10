import { ProductList } from "@/app/organisms/ProductList";
import type { ProductItemType } from "@/app/ProductItemType";

export default function Home() {
	const products: ProductItemType[] = [
		{ id: 1, name: "Koszulka", src: "#1", imageUrl: "/img1.jpeg" },
		{ id: 2, name: "Buty", src: "#2", imageUrl: "/img2.jpeg" },
		{ id: 3, name: "Spodnie", src: "#3", imageUrl: "/img3.jpeg" },
		{ id: 4, name: "Plecak", src: "#4", imageUrl: "/img4.jpeg" },
	];

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductList products={products} />
		</main>
	);
}
