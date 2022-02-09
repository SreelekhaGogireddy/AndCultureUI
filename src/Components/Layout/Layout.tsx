import "../Styles/Brewery.scss";
import { Header } from "../Header/Header";
type Props = {};

export const Layout: React.FC<Props> = ({
        children,
      })=>
   (
    <div>
      <div className="app">
        <Header/>
        {children}
      </div>
    </div>
  );
