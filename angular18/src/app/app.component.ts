import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from "./databinding/databinding.component";
import { PipeComponent } from "./pipe/pipe.component";
import { GetApiComponent } from "./get-api/get-api.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatabindingComponent, PipeComponent, GetApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18';
}
