import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { DateFormatPipe } from './date-format.pipe';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DateFormatPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
  location = 'Gaborone';
  weatherDetails : any = ''

  constructor(private apiService: ApiService){
    this.fetchWeatherData();
  }

  fetchWeatherData(){
    this.apiService.getPosts(this.location).subscribe(data =>{
      this.weatherDetails = data;
      console.log(this.weatherDetails);

    }, error =>{

    });
  }



}
