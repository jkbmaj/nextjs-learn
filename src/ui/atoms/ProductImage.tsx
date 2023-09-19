import Image from "next/image";
import { type ProductItemType } from "@/app/ProductItemType";

export const ProductImage = ({ product }: { product: ProductItemType }) => {
	return (
		<Image src={product.imageUrl} alt={product.name} width={300} height={300} />
	);
};
