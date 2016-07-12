import { provideRouter, RouterConfig } from '@angular/router';
import  {GithubComponent} from './github/github.component';

const routes: RouterConfig = [
  { path: 'github', component: GithubComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
