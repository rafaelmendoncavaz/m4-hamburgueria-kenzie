import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { app } from "../../server/server";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const HomePage = () => {
   const localCartList = localStorage.getItem("@KENZIEBURGERCART")

   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(localCartList ? JSON.parse(localCartList) : []);
   const [openModal, setOpenModal] = useState(false)
   const [value, setValue] = useState("");

   // useEffect montagem - carrega os produtos da API e joga em productList
   useEffect(() => {

      const loadAPI = async () => {
      try {
            const { data } = await app.get("/products");
            setProductList(data);
            
         } catch (error) {
            console.error("Error: ", error)
   
         }
         }
      loadAPI()
   }, []);

   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   useEffect(() => {
      localStorage.setItem("@KENZIEBURGERCART", JSON.stringify(cartList))
   }, [cartList])

   // adição, exclusão, e exclusão geral do carrinho
   const itemAlreadyAdded = () => {
      toast.error('Você já adicionou este item!', {
         position: "top-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
         transition: Bounce,
         });
   }
   const addItemsToCart = (item) => {
      if (!cartList.some(cartItem => cartItem.id === item.id)) {
         setCartList([item, ...cartList])
      } else {
         itemAlreadyAdded()
      }
   }
   const removeCartItem = (itemToRemove) => {
      setCartList((item) => item.filter(cartItem => cartItem !== itemToRemove))
   }
   const removeAllItems = () => {
      setCartList([])
   }

   // renderizações condições e o estado para exibir ou não o carrinho
   const openCartModal = () => {
      setOpenModal(true)
   }

   const closeModal = () => {
      setOpenModal(false)
   }

   // filtro de busca
   const filteredItems = value.length > 0 && productList.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))

   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header cartList={cartList} setValue={setValue} value={value} openCartModal={openCartModal} />
         <main>
            <ProductList productList={value.length > 0 ? filteredItems : productList} addItemsToCart={addItemsToCart} />
            {
               openModal && <CartModal cartList={cartList} closeModal={closeModal} removeCartItem={removeCartItem} removeAllItems={removeAllItems} />
            }
            <ToastContainer
               position="top-center"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
               transition={Bounce}
               stacked
               />
         </main>
      </>
   );
};
