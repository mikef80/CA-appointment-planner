import React from "react";

export const Tile = (props) => {
  const { item } = props;
  const values = Object.values(item);
  return (
    <div className="tile-container">
      {values.map((value, index) => {
        const className = index === 0 ? "tile-title" : "tile";

        return (
          <p className={className} key={index}>
            {value}
          </p>
        );
      })}
    </div>
  );
};
