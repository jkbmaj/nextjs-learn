import { ProductImage } from "@ui/atoms/ProductImage";
import { ProductName } from "@ui/atoms/ProductName";
import { type ProductItemType } from "@/app/ProductItemType";

export const ProductItem = ({ product }: { product: ProductItemType }) => {
	return (
		<li key={"product" + product.id} className="float-left mx-2">
			<a href={product.src} key={product.id}>
				<ProductImage product={product} />
				<ProductName name={product.name} />
			</a>
		</li>
	);
};
