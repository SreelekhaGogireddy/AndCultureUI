import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/Brewery.scss";
import { Link} from 'react-router-dom';
import { BrewaryAPiEndPoints } from "../../Constants/ApiConstants";
type Props = {};

interface IBreweriesList {
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

export const Brewery = (props: Props) => {
  const [breweryList, setBreweryList] = useState<IBreweriesList[]>([]);

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, []);

  const getData = async () => {
    axios
      .get(`${BrewaryAPiEndPoints.BrewaryList}`)
      .then((response) => {
        setBreweryList(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <div className="app">
        <div className="brewery-list">
          {breweryList &&
            breweryList.map((brewery: IBreweriesList) => (
              <div className="brewery-list-display">
                <h2 className="hover-1"> <Link className="brewery-list-header"  to={{pathname:"/Details", state:{brewery}}}>{brewery.id}</Link></h2>
                <div className="margin-bottom type-color">{brewery.brewery_type.toUpperCase()}</div>
                <div className="margin-bottom">
                  {brewery.street}
                  {brewery.city}
                  {brewery.state}
                  {brewery.postal_code}
                </div>
                {brewery.website_url ? (
                  <a href={brewery.website_url} target="_blank">
                    Website Link
                  </a>
                ) : (
                  ""
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
