import { useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

let marker: any;

const GoogleMap = (props: { latitude: string, longitude: string }) => {
  const charlotte = { lat:Number(props.latitude), lng: Number(props.longitude) };
  const [coordinates, setCoordinates] = useState(charlotte);

  const handleApiLoaded = (map: any, maps: any) => {
    marker = new maps.Marker({
      position: coordinates,
      map,
      title: "Brewery Location",
    });
  };

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <GoogleMapReact
        defaultCenter={charlotte}
        zoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent
          lat={props.latitude}
          lng={props.longitude}
          text="Brewery Location"
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
