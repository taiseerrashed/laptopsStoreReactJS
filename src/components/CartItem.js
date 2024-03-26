import React from "react";
import { Button, Stack } from "react-bootstrap";
import StoreItems from "../data/storeItems.json";
import formatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ id, quantity }) => {
    const {removeItemFromCart } = useShoppingCart();
    const item = StoreItems.find((i) => i.id === id);
    if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
            src={item.image}
            alt="cart-img"
            style={{ width: "125px", height: "75px", objectFit: "contain" }}
        />
        <div className="me-auto">
            <div>
                {item.model}{" "}
                {quantity > 1 && (
                    <span className="text-muted" style={{ fontSize: "0.65rem" }}>
                        x{quantity}
                    </span>
                )}
                <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button variant="outline-danger" size="sm" onClick={()=> removeItemFromCart(id)}>&times;</Button>
                    
    </Stack>
  );
};

export default CartItem;
