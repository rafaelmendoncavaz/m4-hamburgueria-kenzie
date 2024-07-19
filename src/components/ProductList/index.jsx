import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";

export const ProductList = ({ productList, addItemsToCart }) => {
   return (
      <ul className={style.listContainer}>
         {
            productList.map((product, index) => (
               <ProductCard key={product.id} product={product} addItemsToCart={addItemsToCart} index={index} />
            ))
         }
      </ul>
   );
};
