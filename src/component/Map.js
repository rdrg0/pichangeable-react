import GoogleMaps from "simple-react-google-maps";
export default function Maps ({x,y}) {
    let lat= parseFloat(x);
    let lon= parseFloat(y);
    return (
      <div className="container" style={{}}>
        <GoogleMaps
          apiKey={"AIzaSyAFwZ5uFjydXpyGNETituX1nalAd5I6Rrs"}
          style={{ height: "450px", width: "450px",borderRadius: "16px" , margin: "0 auto" }}
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