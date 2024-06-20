import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import storeItems from "../data/storeItems.json";
import { Button } from "react-bootstrap";
import { SlArrowLeftCircle } from "react-icons/sl";

const ProductDetails = (id) => {
  const { productId } = useParams();
  const product = storeItems.find((item) => item.id === parseInt(productId));
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      {product ? (
        <div
          className="productDetails bg-white shadow-sm p-4 d-flex align-items-center justify-content-center"
          style={{
            width: "80%",
            margin: "10vh auto",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <div>
            <h3>
              {product?.brand} - {product?.model} {product?.release_year}
            </h3>
            <img
              src={product?.image}
              alt={product?.model}
              style={{ width: "60%", marginBottom: "10px" }}
            />
            <p>{product.description}</p>
          </div>
          <div>
            <p>
              <span className="fw-bold">Processor:</span> {product?.processor}
            </p>
            <p>
              <span className="fw-bold">Display Size:</span>{" "}
              {product?.display_size}
            </p>
            <p>
              <span className="fw-bold">Resolution:</span> {product?.resolution}
            </p>
            <p>
              <span className="fw-bold">Storage:</span> {product?.storage}
            </p>
            <p>
              <span className="fw-bold">Ram:</span> {product?.ram}
            </p>
            <p>
              <span className="fw-bold">Price:</span> {product?.price} EGP
            </p>

            <Button size="sm" onClick={() => navigate(-1)}>
              <SlArrowLeftCircle /> Go Back
            </Button>
          </div>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;


