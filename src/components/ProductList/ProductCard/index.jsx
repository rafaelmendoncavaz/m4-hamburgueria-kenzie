import style from "./style.module.scss";

export const ProductCard = ({ product, addItemsToCart }) => {

    return(
        <li tabIndex={0} className={style.cardContainer}>
            <div className={style.imageBackground} >
                <img src={product.img} alt={product.name} />
            </div>
            <div className={style.descriptionContainer}>
                <h3 className="title-3 gray-600">{product.name}</h3>
                <span className="caption gray-400">{product.category}</span>
                <span className="body primary semibold">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addItemsToCart(product)} className="button body semibold">Adicionar</button>
            </div>
        </li>
    )
}