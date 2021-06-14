import React from "react";
function Result(props) {
  return (
    <div className="forecast evenStyle">
      <div>
        <div className="weekDay">{props.item.date}</div>
        <p className="forecastText">{props.item.day.condition.text}</p>
        <img src={props.onChange(props.item.day.condition.text)} alt="" />
        <div className="temperature">
          <p className="mainTemp forecastTemp">
            {props.item.day.maxtemp_c}
            <span>&#8451;</span>
          </p>
          <p className="secondTemp">
            {props.item.day.mintemp_c}
            <span>&#8451;</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Result;
