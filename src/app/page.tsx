import { ProductList } from "@/app/organisms/ProductList";
import type { ProductItemType } from "@/app/ProductItemType";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			Show me your products: <a href="/products">HERE</a>
		</main>
	);
}
