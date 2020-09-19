import { Component, OnInit } from '@angular/core';
import{MessageService} from '../appServices/message.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPAgeComponent implements OnInit {
  Router
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  btnClick(){

    const msgSevice = new MessageService();
    msgSevice.messageAlert();
  }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

 
}
  
