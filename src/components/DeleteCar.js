import React from "react";

function DeleteCar({ id, children }) {
  const deleteCar = function () {
    return true;
  };

  return (
    <button
      type="button"
      onClick={() => {
        if (
          confirm("Are you sure you want to remove this car from your gallery?")
        ) {
          deleteCar().catch((err) => {
            alert(err.message);
          });
        }
      }}
    >
      {children}
    </button>
  );
}

export default DeleteCar;
