import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'monthsSlovak'})
export class MonthsSlovak implements PipeTransform {
  transform(value: any): any {

    switch (value){
      case "01":
        return "Január";
      case "02":
        return "Február";
      case "03":
        return "Marec";
      case "04":
        return "Apríl";
      case "05":
        return "Máj";
      case "06":
        return "Jún";
      case "07":
        return "Júl";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "Október";
      case "11":
        return "November";
      case "12":
            return "December";
      default :
        return "FAIL";

    }
  }
}

@Pipe({name: 'weatherSlovak'})
export class WeatherSlovak implements PipeTransform {
  transform(value: any): any {

    switch (value){
      case "tornado":
        return "tornádo";
      case "tropical storm":
        return "tropická búrka";
      case "hurricane":
        return "hurikán";
      case "severe thunderstorms":
        return "silné búrky";
      case "thunderstorms":
        return "búrky";
      case "mixed rain and snow":
        return "zmiešaný dážď a sneh";
      case "mixed rain and sleet":
        return "zmiešaný dážď a sneh";
      case "freezing drizzle":
        return "mrazivé mrholenie";
      case "drizzle":
        return "mrholenie";
      case "freezing rain":
        return "mrznucí dážď";
        case "showers":
        return "spŕšky";
      case "snow flurries":
        return "snehové prehánky";
      case "light snow showers":
        return "slabé snehové prehánky";
      case "blowing snow":
        return "fúka sneh";
      case "snow":
        return "sneží";
      case "hail":
        return "krupobitie";
      case "sleet":
        return "čľapkanica";
      case "dust":
        return "prašno";
      case "foggy":
        return "hmlisto";
      case "haze":
        return "opar";
      case "smoky":
        return "nejasno";
      case "blustery":
        return "blustery";
      case "windy":
        return "veterno";
      case "cold":
        return "studeno";
      case "cloudy":
        return "oblačno";
      case "sunny":
        return "slnečno";
      case "pekné počasie":
        return "December";
      case "mixed rain and hail":
        return "dážď s krupobitím";
      case "hot":
        return "horúco";
      case "isolated thunderstorms":
        return "miestné búrky";
      case "scattered thunderstorms":
        return "rozptýlené búrky";
      case "scattered showers":
        return "rozptýlené spŕšky";
      case "heavy snow":
        return "silné sneženie";
      case "scattered snow showers":
        return "rozptýlené snehové prehánky";
      case "partly cloudy":
        return "polooblačno";
      case "thundershowers":
        return "polojasno";
      case "isolated thundershowers":
        return "izolované búrky";
      default :
        return "Počasie nie je dostupné";

    }
  }
}
