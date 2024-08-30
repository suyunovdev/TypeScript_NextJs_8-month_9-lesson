import { ProductType } from "@/types/product.types";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="p-4 sm:p-5 w-full sm:w-[300px] h-auto sm:h-[400px] shadow-md rounded-lg cursor-pointer ">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[200px] sm:h-[200px] object-contain"
      />
      <h1 className="truncate text-sm sm:text-base">{product.title}</h1>
      <p className="mt-2 sm:mt-5 text-sm sm:text-base">
        Price: {product.price}
      </p>
      <button className="bg-yellow-500 text-white px-4 py-2 mt-2 sm:mt-3 rounded-md">
        Add to Card
      </button>
    </div>
  );
};

export default ProductCard;
