import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Index(props) {
  const className = [props.className];
  if (props.isPrimary)
    className.push(
      "bg-indigo-500 py-4 px-9 text-white rounded-full font-semibold"
    );
  if (props.isOutline)
    className.push(
      "py-4 px-9 text-indigo-500 outline-indigo-500 outline outline-1 rounded-full font-semibold"
    );
  if (props.isLarge)
    className.push(
      "bg-indigo-500 py-4 px-32 text-white rounded-full font-semibold"
    );

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    <Link to={props.href} className={className.join(" ")}>
      {props.children}
    </Link>;
  }
  return (
    <button
      className={className.join(" ")}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Index.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  className: propTypes.string,
  isOutline: propTypes.bool,
  isLarge: propTypes.bool,
};
