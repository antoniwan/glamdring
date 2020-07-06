import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "../styles/Title";
import CarStyles from "../styles/CarStyles";
import PriceTag from "../styles/PriceTag";
import formatMoney from "../libs/formatMoney";

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
      <PriceTag>{formatMoney(car.msrp)}</PriceTag>
      <p>{car.description}</p>
    </CarStyles>
  );
}

Car.propTypes = {
  Car: PropTypes.object.isRequired,
};
