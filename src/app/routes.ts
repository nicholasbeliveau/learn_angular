import {Routes} from '@angular/router';
import {Home} from './home/home';
import {Details} from './details/details';
import { PokemonPage } from './pokemon-page/pokemon-page';

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'pokemon',
    component: PokemonPage,
    title: 'Pokemon',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Home details',
  },
];
export default routeConfig;