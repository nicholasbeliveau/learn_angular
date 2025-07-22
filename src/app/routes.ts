import {Routes} from '@angular/router';
import {Home} from './home/home';
import {Details} from './details/details';
import { Pokemon } from './pokemon/pokemon';

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'pokemon',
    component: Pokemon,
    title: 'Pokemon',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Home details',
  },
];
export default routeConfig;