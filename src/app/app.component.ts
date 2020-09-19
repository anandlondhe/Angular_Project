import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'My-New-Project';

  constructor(private router:Router){}

  
    goToPage(pageName:string):void{
      this.router.navigate([`${pageName}`]);
    }

    
  
}

