import React from "react";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

const StoreItem = ({ id, image, brand, price, model }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getItemsQuantity(id);

  
  return (
    <Card className="h-100 store-item">
      <Card.Img
        src={image}
        variant="top"
        style={{ height: "200px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-4">{brand}</span>
          <span className="text-muted me-2">{formatCurrency(price)}</span>
        </Card.Title>
        <Card.Text>{model}</Card.Text>
        <div className="mt-auto mb-2">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span className="fs-3">{quantity} in cart</span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItemFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
        <Button className="w-100">
          <Link to={`/product/${id}`} style={{color: "#fff" , textDecoration: "none"}}>
              View Details
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;

