import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheBlade';
  private routes=['/component1','/component2','/component3','/component4'];
  private currentIndex=0;

  constructor(private router:Router)
  {
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        this.currentIndex=this.routes.indexOf(event.url);
      }
    });
  }

  nextComponent(){
    if(this.currentIndex<this.routes.length-1){
      this.router.navigate([this.routes[this.currentIndex+1]]);
    }
  }

  previousComponent(){
    if(this.currentIndex>0){
      this.router.navigate([this.routes[this.currentIndex-1]]);
    }
  }
}
