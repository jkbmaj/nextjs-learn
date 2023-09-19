// import { ProductItem } from "@ui/molecules/ProductItem";

import { ProductPreview } from "@/ui/molecules/ProductPreview";

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const response = await fetch("https://www.ittools.pl/products_new.json");
	const products = (await response.json()) as {
		id: string;
		title: string;
		image: string;
		price: number;
	}[];
	const product = products.filter(
		(productObj) => productObj.id === params.productId,
	)[0];

	const productItem = {
		id: product.id,
		name: product.title,
		src: "/products/" + product.id,
		imageUrl: product.image,
		price: product.price,
	};

	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<ProductPreview product={productItem}></ProductPreview>
		</main>
	);
}
