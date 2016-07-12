import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import  {GithubComponent} from './github/github.component';
import { AngularFire, FirebaseObjectObservable,AuthProviders, AuthMethods   } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [GithubComponent, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent {
  item: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire) {
    this.item = af.database.object('https://testproject-b91b4.firebaseio.com/item');
  }
  save(newName: string) {
    this.item.set({ name: newName });
  }
  update(newSize: string) {
    this.item.update({ size: newSize });
  }
  delete() {
    this.item.remove();
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup,
  });


  }

  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
  }
}
