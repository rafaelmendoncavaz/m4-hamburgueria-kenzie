import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { useRef } from "react";
import style from "./style.module.scss";
import { useOutClick } from "../../hooks/useOutClick";
import { useKeyDown } from "../../hooks/useKeyDown";

export const CartModal = ({ cartList, closeModal, removeCartItem, removeAllItems }) => {

   const modalRef = useOutClick(() => closeModal());
   const buttonRef = useKeyDown("Escape", (e) => {
      e.click();
   });

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={style.dialog}>
         <div ref={modalRef} className={style.container}>
            <div className={style.header}>
               <h2 className="title-3 gray-100">Carrinho de compras</h2>
               <button ref={buttonRef} aria-label="close" title="Fechar" onClick={closeModal}>
                  <MdClose size={21} />
               </button>
            </div>
            <div className={style.content}>
               <ul>
                  {
                     cartList.length > 0
                     ? cartList.map((product) => (
                        <CartItemCard key={product.id} cartList={product} removeCartItem={removeCartItem} />
                     ))
                     : (<h2 className="title-3 gray-600">Seu carrinho está vazio</h2>)
                  }
               </ul>
               <div className={style.separator} />
            </div>
            <div className={style.total}>
               <div>
                  <span className="body semibold gray-600">Total</span>
                  <span className="body primary semibold">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={removeAllItems} className="button headline">Remover todos</button>
            </div>
         </div>
      </div>
   );
};
