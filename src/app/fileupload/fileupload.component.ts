import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from  '@angular/forms';
import {DataService} from '../../data.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  form:FormGroup
  constructor(private dataService:DataService,private activatedroute:ActivatedRoute,private router:Router) { }

  onFileSelect(event){
    if(event.target.files.lenght > 0) {
      const file = event.target.files[0];
      this.form.get('image').setValue(file);
    }
  }

  uploadFile(){

    const formData = new FormData();
    formData.append('myFile',this.form.get('image').value);
    formData.append('mobile',this.form.get('user_mobile').value);
    this.dataService.saveImage(formData).subscribe((res)=>{

      console.log("data Added",res);
        alert("Data Saved");
        this.router.navigateByUrl("/displayimage")
    })
  }
  
  ngOnInit(): void {
  }
 
}
