import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {


courseName:string='Angular18';
inputType="checkbox";
rolNo:number=123;
isIndian:boolean=false;
currentDate:Date = new Date();

constructor(){
  
}

}
