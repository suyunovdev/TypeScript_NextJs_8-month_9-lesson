import { ProductType } from "@/types/product.types";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="p-5 w-[300px] h-[]400px shadow-md rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[300px] object-contain"
      />
      <h1 className="truncate">{product.title}</h1>
      <p className="mt-5">Price: {product.price}</p>
      <button className="bg-yellow-500 text-white px-4 py-2 border-l-0 rounded-md">
        Add to Card
      </button>
    </div>
  );
};
export default ProductCard;
