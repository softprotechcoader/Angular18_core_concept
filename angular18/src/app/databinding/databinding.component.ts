import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {


courseName:string='Angular18';
inputType="checkbox";
rolNo:number=123;
isIndian:boolean=false;
currentDate:Date = new Date();
myClass:string = "bg-danger"

constructor(){
  
}

showAlert(message:string){
alert(message);
}
changeCourseName(){
  // let courselist :string[]=["Programming with C","Java","Python","C#","React Js","Angular "];
  // for(let i=0; i<courselist.length; i++){
    
  //   this.courseName = courselist[i];
  //   break
  // }
this.courseName = "React Js";
}

}
