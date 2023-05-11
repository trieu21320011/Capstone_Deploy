import React from "react";

import { colourOptions, groupedOptions } from "./data";

const groupStyles = {
   border: `0px dotted ${colourOptions[2].color}`,
   borderRadius: "5px",
   background: "white",
   height: "200px",
};

const options = [
   { value: "chocolate", label: "Chocolate" },
   { value: "strawberry", label: "Strawberry" },
   { value: "vanilla", label: "Vanilla" },
];

export default function customGroup() {
   return (
      <div style={{ minHeight: "100px" }}>
         
      </div>
   );
}
