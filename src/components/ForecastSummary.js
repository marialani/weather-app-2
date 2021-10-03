import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon } = props;

  return (
    <>
      <div className="forecast-summary__date"> {date} </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&#8451;
      </div>
      <div className="forecast-summary__description">{description} </div>
      <div className="forecast-summary__icon">{icon} </div>
    </>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
