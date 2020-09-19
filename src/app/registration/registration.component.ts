import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {User} from './registration';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup
  user: any=[]
  
  getStudentData(){
    this.dataservice.saveData(this.form.value).subscribe((res)=>{
      this.user = res
    })
  } 
  constructor(private router:Router,private http:HttpClient,private dataservice:DataService) { }

  ngOnInit(): void {
  }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  onSubmit(data)
  {
    this.http.post('http://localhost:9999/registration',data)
    .subscribe((result)=>{
      console.log("result",result)
    })
    console.log(data);
  }
  
}
