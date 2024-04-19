import React from "react";
import "./FacilityIcon.style.css";
import { infoFacility } from "../../constants/info";

const FacilityIcon = ({ name }) => {
  let iconName = "default";
  infoFacility.map((val) => {
    if (val.name === name) iconName = val.icon;
  });

  return <span className={"facility-icon" + " icon-" + iconName}></span>;
};

export default FacilityIcon;
