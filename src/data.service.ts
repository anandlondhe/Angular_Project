import { Injectable } from '@angular/core';
import{HttpClientModule, HttpClient} from '@angular/common/http'

const api:any="http://localhost:80/ngproject/";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  saveData(data){

      return this.httpclient.post(api,data)
    }

    getDataById(id){
      return this.httpclient.get(api+id)
    }

    getData(){
      return this.httpclient.get(api)
    } 

    updateData(id,data){
      return this.httpclient.put(api+id,data)
    }

    deleteData(id){
      return this.httpclient.delete(api+id)
    }

      saveImage(data)
      {
        return this.httpclient.post(api + 'upload.php',data)
      }
    
      getImageData()
      {
        return this.httpclient.get(api +'showimage.php')
      }


    constructor(private httpclient:HttpClient) { }


}
