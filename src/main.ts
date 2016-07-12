import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire,
  AuthMethods,
  AuthProviders,
  firebaseAuthConfig } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app
  defaultFirebase({
    apiKey: "AIzaSyC1pQGnswMsqKM5nuCRWF341-dQ4cxEEwE",
    authDomain: "testproject-b91b4.firebaseapp.com",
    databaseURL: "https://testproject-b91b4.firebaseio.com",
    storageBucket: "testproject-b91b4.appspot.com",
  }),

  firebaseAuthConfig({
    provider: AuthProviders.Github,
    method: AuthMethods.Popup
  })
])
  .catch(err => console.error(err));
