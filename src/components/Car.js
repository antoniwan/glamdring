import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "../styles/Title";
import CarStyles from "../styles/CarStyles";
import PriceTag from "../styles/PriceTag";
import formatMoney from "../libs/formatMoney";
import DeleteCar from "./DeleteCar";
import AddToCheckout from "./AddToCheckout";

export default function Car({ car }) {
  return (
    <CarStyles>
      {car.image && <img src={car.image.publicUrlTransformed} alt={car.name} />}

      <Title>
        <Link
          href={{
            pathname: "/car",
            query: { id: car.id },
          }}
        >
          <a>{car.name}</a>
        </Link>
      </Title>
      <PriceTag>{formatMoney(car.price)}</PriceTag>
      <p>{car.description}</p>

      <div className="buttonList">
        <Link
          href={{
            pathname: "update",
            query: { id: item.id },
          }}
        >
          <a>Edit</a>
        </Link>
        <AddToCheckout id={car.id} />
        <DeleteCar id={car.id}>Remove from Checkout</DeleteCar>
      </div>
    </CarStyles>
  );
}

Car.propTypes = {
  Car: PropTypes.object.isRequired,
};
