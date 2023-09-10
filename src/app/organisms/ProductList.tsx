import { type ProductItemType } from "@/app/ProductItemType";
import { ProductItem } from "@/app/organisms/molecules/ProductItem";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul data-testid="products-list" className="list-none">
			{products.map((product) => {
				return <ProductItem key={"product" + product.id} product={product} />;
			})}
		</ul>
	);
};
