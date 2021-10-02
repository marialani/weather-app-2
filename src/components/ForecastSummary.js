import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon } = props;

  return (
    <>
      <div className="date"> {date} </div>
      <div className="temperature"> {temperature} </div>
      <div className="description">{description} </div>
      <div className="icon">{icon} </div>
    </>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
};

export default ForecastSummary;
