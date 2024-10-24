// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList:any [] =[];
  customerList:any[]=[];

  // Two ways by which we can inject either Inject Method or Dependency Injection
// http = Inject(HttpClient);    // From Angular 16 onwords.
constructor(private http:HttpClient){}

// https://jsonplaceholder.typicode.com/users    --> Fake Api from jsonplaceholder

// https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers   -->API from https://projectapi.gerasim.in/index.html.  For This Api Port Should be 4209 use ng s --port 4209

getAllUser(){
  debugger;
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
    debugger;
    this.userList = res;
  });
}

getAllCustomer(){
  this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res:any)=>{
    this.customerList = res.data;
  })
}


}
