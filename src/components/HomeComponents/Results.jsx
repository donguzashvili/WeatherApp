import React from "react";
import "./Results.css";
import Forecast from "./Result";
import windImg from "../Style/img/icon-wind.png";
import windDir from "../Style/img/icon-compass.png";
import partlyCloudy from "../Style/img/icons/icon-3.svg";
import patchyRain from "../Style/img/icons/icon-4.svg";
import sunny from "../Style/img/icons/icon-2.svg";
import moderateRain from "../Style/img/icons/icon-9.svg";
import overCast from "../Style/img/icons/icon-5.svg";
import heavyRain from "../Style/img/icons/icon-11.svg";

class Results extends React.Component {
  state = {
    loading: true,
    data: null,
    time: null,
    forecast: null,
  };

  async componentDidMount() {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=8246dc795dd340d98f7225813210706&q=${this.props.city}&days=10`;
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ data: data, forecast: data.forecast.forecastday });
    this.interval = setInterval(
      () => this.setState({ time: data.location.localtime }),
      500
    );
  }
  async componentDidUpdate(prevprops) {
    if (this.props.city !== prevprops.city) {
      try {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=8246dc795dd340d98f7225813210706&q=${this.props.city}&days=10`;
        const res = await fetch(url);
        const data = await res.json();
        this.setState({ data: data, forecast: data.forecast.forecastday });
      } catch (err) {
        console.log(err);
        alert("Incorrect City");
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  chooseWeatherImg(text) {
    if (text.toLowerCase() === "partly cloudy") {
      return partlyCloudy;
    } else if (text.toLowerCase() === "patchy rain possible") {
      return patchyRain;
    } else if (
      text.toLowerCase() === "sunny" ||
      text.toLowerCase() === "clear"
    ) {
      return sunny;
    } else if (text.toLowerCase() === "moderate rain") {
      return moderateRain;
    } else if (text.toLowerCase() === "overcast") {
      return overCast;
    } else if (text.toLowerCase() === "heavy rain") {
      return heavyRain;
    } else if (text.toLowerCase() === "light rain") {
      return patchyRain;
    } else if (text.toLowerCase() === "light sleet showers") {
      return moderateRain;
    }
  }
  render() {
    return (
      <div className="checkLoading">
        {!this.state.data ? (
          "Loading..."
        ) : (
          <div>
            <h1 className="incorrectCity">
              Incorrect city! Please enter correct city
            </h1>
            <div className="Results">
              <div className="today evenStyle" key={this.props.city}>
                <div className="weekDay">
                  <p>{this.state.time}</p>
                  <p>Current Time</p>
                </div>
                <div className="locationContainer">
                  <p className="city">
                    {this.state.data.location.country},
                    {this.state.data.location.name}
                  </p>
                  <p>{this.state.data.current.condition.text}</p>
                </div>

                <div className="temperature">
                  <p className="mainTemp todayMainTemp">
                    {this.state.data.current.temp_c} <span>&#8451;</span>
                  </p>
                  <img
                    src={this.chooseWeatherImg(
                      this.state.data.current.condition.text
                    )}
                    alt=""
                  />
                </div>
                <div className="wind">
                  <div className="wind-speed">
                    <img src={windImg} alt="wind" />
                    <p>{this.state.data.current.wind_kph}km/h</p>
                  </div>
                  <div className="wind-direction">
                    <img src={windDir} alt="" />
                    <p>{this.state.data.current.wind_dir}</p>
                  </div>
                </div>
              </div>
              <div className="forecastContainer">
                {!this.state.forecast
                  ? "Loading..."
                  : this.state.forecast.map((item, key) => {
                      return (
                        <Forecast
                          item={item}
                          key={key}
                          onChange={this.chooseWeatherImg}
                        />
                      );
                    })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
Results.defaultProps = {
  city: "tbilisi",
};
export default Results;
