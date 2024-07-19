import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss";

export const Header = ({ cartList, value, setValue, openCartModal }) => {

   return (
      <header className={style.container}>
         <div className={style.content}>
            <div>
               <img src={Logo} alt="Logo Kenzie Burguer" />
            </div>
               <div className={style.formContainer}>
                  <form className={style.formContent}>
                     <input
                        type="text"
                        value={value}
                        placeholder="Pesquise seu lanche favorito..."
                        onChange={(e) => setValue(e.target.value)}
                     />
                     <button type="submit" >
                     <MdSearch size={21} />
                     </button>
                  </form>
               </div>
            <div className={style.cartContent}>
               <button onClick={openCartModal}>
                  <MdShoppingCart size={24} />
               </button>
               <span className={cartList.length === 0 ? style.emptyCart : style.notEmptyCart}>{cartList.length}</span>
            </div>
         </div>
      </header>
   );
};
