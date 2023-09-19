import Link from "next/link";
import { ProductImage } from "@ui/atoms/ProductImage";
import { ProductName } from "@ui/atoms/ProductName";
import { ProductPrice } from "@ui/atoms/ProductPrice";
import { type ProductItemType } from "@/app/ProductItemType";

export const ProductPreview = ({ product }: { product: ProductItemType }) => {
	return (
		<>
			<ProductImage product={product} />
			<ProductName name={product.name} />
			<ProductPrice price={product.price} />
			<Link href="/products">Back to the product list</Link>
		</>
	);
};
