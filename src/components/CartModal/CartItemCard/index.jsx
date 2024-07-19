import { MdDelete } from "react-icons/md";
import style from "./style.module.scss";

export const CartItemCard = ({ cartList, removeCartItem }) => {
   return (
      <li>
         <div className={style.content}>
            <div className={style.imageBackground}>
               <img src={cartList.img} alt={cartList.name} />
            </div>
            <div className={style.description}>
               <h3 className="title-3 gray-600">{cartList.name}</h3>
               <span className="body primary semibold">{cartList.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
         </div>
         <button onClick={() => removeCartItem(cartList)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
