import React from "react";
import "./SeassonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { iconName, text } = seasonConfig[season];

  return (
    <div className={`seasson-display ${season}`}>
      <i className={`${iconName} massive icon icon-top`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} massive icon icon-bottom`}></i>
    </div>
  );
};

export default SeasonDisplay;
