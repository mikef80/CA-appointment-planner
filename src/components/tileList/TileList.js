import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const { array } = props;
  console.log("this far");

  return (
    <div>
      {array.map((item, index) => {
        return <Tile item={item} key={index} />;
      })}
    </div>
  );
};
