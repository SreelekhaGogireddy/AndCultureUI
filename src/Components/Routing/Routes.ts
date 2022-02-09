import IRoute from './RoutesInterface';
import {BreweryDetails} from "../Brewery/BreweryDetails";
import {Brewery} from "../Brewery/Brewery";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Brewery List',
        component: Brewery,
        exact: true
    },
    {
        path: '/Details',
        name: 'Brewery Details',
        component: BreweryDetails,
        exact: true
    },
]

export default routes;