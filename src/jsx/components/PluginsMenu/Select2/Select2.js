import React, { useState, Fragment } from "react";

import CustomGroup from "./CustomGroup";
import Disabling from "./Disabling";
import CustomClearIndicator from "./MultiSelect";
import PageTitle from "../../../layouts/PageTitle";

import CustomSelete from "./CustomeSelete";

const options = [
   { value: "chocolate", label: "Chocolate" },
   { value: "strawberry", label: "Strawberry" },
   { value: "vanilla", label: "Vanilla" },
];

const Select2 = () => {
   const [selectedOption, setSelectedOption] = useState(null);

   return (
      <Fragment>
         <PageTitle activeMenu="Select2" motherMenu="Components" />

        <div></div>
      </Fragment>
   );
};

export default Select2;
