import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from './service/voice-recognition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Speech-Recognition-App';
  text:string="";
  constructor(public service:VoiceRecognitionService){
    this.service.init();
  }
  ngOnInit(){

  }
  startService(){
    this.service.start()
  }
 
  stopService(){
    this.service.stop()
  }
}
