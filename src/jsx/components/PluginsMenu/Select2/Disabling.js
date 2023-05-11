import React, { useState } from "react";


const options = [
   { value: "chocolate", label: "Chocolate" },
   { value: "strawberry", label: "Strawberry", isDisabled: true },
   { value: "vanilla", label: "Vanilla" },
];
const Disabling = () => {
   const [selectedOption, setSelectedOption] = useState(null);
   return (
      <div>

      </div>
   );
};

export default Disabling;
