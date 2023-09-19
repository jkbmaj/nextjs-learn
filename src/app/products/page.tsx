import { ProductList } from "@ui/organisms/ProductList";

export default async function Products() {
	const response = await fetch("https://www.ittools.pl/products_new.json");
	const products = (await response.json()) as {
		id: string;
		title: string;
		image: string;
		price: number;
	}[];

	const productItems = products.map((product) => {
		return {
			id: product.id,
			name: product.title,
			src: "/products/" + product.id,
			imageUrl: product.image,
			price: product.price,
		};
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductList products={productItems} />
		</main>
	);
}
