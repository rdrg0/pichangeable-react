import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
export default class Maps extends Component {
  render() {
    return (
      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyAFwZ5uFjydXpyGNETituX1nalAd5I6Rrs"}
          style={{ height: "600px", width: "600px" }}
          zoom={13}
          center={{
            lat: -12.037354,
            lng: -77.000488
          }}
          markers={[
            { lat: -12.037354, lng: -77.000488}
          ]}
        />
      </div>
    );
  }
}