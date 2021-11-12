import GoogleMaps from "simple-react-google-maps";
export default function Maps ({x,y}) {
    let lat= parseFloat(x);
    let lon= parseFloat(y);
    return (
      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyAFwZ5uFjydXpyGNETituX1nalAd5I6Rrs"}
          style={{ height: "600px", width: "600px" }}
          zoom={13}
          center={{
            lat: lat,
            lng: lon
          }}
          markers={[
            { lat: lat, lng: lon}
          ]}
        />
      </div>
    );
}