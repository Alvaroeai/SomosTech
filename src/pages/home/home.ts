import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';

import { DatePicker } from '@ionic-native/date-picker';
import { Calendar } from '@ionic-native/calendar';
import { Platform } from 'ionic-angular';
import { CalendarModule } from 'ionic3-calendar';

//@ViewChild(DatePickerDirective) private datepickerDirective:DatePickerDirective;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    platform: Platform,
    private datePicker: DatePicker,
    private calendar: Calendar,
    private videoPlayer: VideoPlayer) {
    platform.ready().then(() => {
      let options = {
        date: new Date(),
        mode: 'date'
      }

      this.datePicker.show({
        date: new Date(),
        mode: 'date',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
      }).then(
        date => console.log('Got date: ', date),
        err => console.log('Error occurred while getting date: ', err)
      );
    });


  }

  openCalendar(){
      this.calendar.openCalendar(new Date()).then(
          (msg) => { console.log(msg); },
          (err) => { console.log(err); }
      );
  }


}
