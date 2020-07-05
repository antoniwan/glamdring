import PropTypes from "prop-types";
import Cars from "../components/Cars";

function UsedCars() {
  return (
    <div>
      <h1>UsedCars!</h1>
      <Cars page={1} count={50} />
    </div>
  );
}

UsedCars.propTypes = {
  query: PropTypes.shape({
    page: PropTypes.string,
    count: PropTypes.number,
  }),
};

export default UsedCars;
