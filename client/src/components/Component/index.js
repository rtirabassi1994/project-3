import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function component(props) {
  return (
    <span className="" {...props} role="" tabIndex="">
      
    </span>
  );
}

export default component;