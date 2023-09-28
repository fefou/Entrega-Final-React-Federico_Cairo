import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./ItemCount.module.scss";

const ItemCount = () => {
  const [count, setCount] = useState(0); //
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddProduct = () => {
    setCartItems(cartItems + 1);
    setCount(count + 1);
  };
  const handleRemoveProduct = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button className={styles.boton} onClick={handleRemoveProduct}>-</button>
      <label className={styles.textoBoton}>
        {count}
      </label>
      <button className={styles.boton} onClick={handleAddProduct}>+</button>
    </div>
  );
};

export default ItemCount;
