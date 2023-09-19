import { ProductItem } from "@ui/molecules/ProductItem";
import { type ProductItemType } from "@/app/ProductItemType";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul data-testid="products-list" className="list-none">
			{products.map((product) => {
				return <ProductItem key={"product" + product.id} product={product} />;
			})}
		</ul>
	);
};
