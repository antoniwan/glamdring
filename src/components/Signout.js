import React from "react";
import { CURRENT_USER_QUERY } from "./User";

const SIGN_OUT_MUTATION = {};

function Signout() {
  return (
    <button
      type="button"
      onClick={(e) => {
        alert("Sign out!");
      }}
    >
      Sign Out
    </button>
  );
}
export default Signout;
