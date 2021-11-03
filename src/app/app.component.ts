import { Component } from '@angular/core';
import { IntentOptions, WebIntent } from '@ionic-native/web-intent/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private intentOptions:IntentOptions = {
    action: this.webIntent.ACTION_VIEW,
    url: 'tel:1234567890'
  }



  constructor(private webIntent: WebIntent) {}

  public onStartIntentClick() {
    console.log('clicked');
    this.webIntent.sendBroadcast(this.intentOptions);
  }
}
