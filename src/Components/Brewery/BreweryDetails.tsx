import * as React from "react";
import "../Styles/Brewery.scss";
import { useLocation } from 'react-router-dom'
import GoogleMap from "../GoogleMap";



interface IBreweryDetailsState {
  brewery: IBrewery;
}

interface IBrewery {
  id: string;
  name: string;
  brewery_type: string;
  street: string;
  address_2: string;
  address_3: string;
  city: string;
  state: string;
  county_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  updated_at: string;
  created_at: string;
}

export const BreweryDetails: React.FC<{}> = () => {
  const location = useLocation();
  const breweryData = location.state as IBreweryDetailsState;
  const breweryItem = breweryData.brewery;
  
  return (
    <div>
      <div className="app">
        <ul className="brewery-list">
          <div className="brewery-list-display">
            <h2 className="brewery-details-header">{breweryItem.id}</h2>
            <div className="brewery-details-Margin">
              {breweryItem.street}
              {breweryItem.city}
              {breweryItem.state}
              {breweryItem.postal_code}
            </div>
            <GoogleMap latitude={breweryItem.latitude} longitude={breweryItem.longitude} />
          </div>
        </ul>
      </div>
    </div>
  );
};
