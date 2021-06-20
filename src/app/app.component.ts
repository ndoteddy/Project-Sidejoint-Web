import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { SignalRService } from './services/signalr.service.service';
import { Subscription } from 'rxjs';
import { Message } from './message';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private signalRSubscription: Subscription;

  public content: Message;


  constructor(private apiService: ApiService,private signalrService: SignalRService){
    this.signalRSubscription = this.signalrService.getMessage().subscribe(
      (message) => {
        console.log('nandotest' + JSON.stringify(message));
        this.content = message;
    });
  }

  title = 'sidejoint';

  ngOnInit()
  {
    
  }

  ngOnDestroy(): void {
    this.signalrService.disconnect();
    this.signalRSubscription.unsubscribe();
  }


}
