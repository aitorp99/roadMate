import { Pipe, PipeTransform } from '@angular/core';
import { Advertisments } from '../interfaces/advertisments';
@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(ads: Advertisments[], date: string, schedule: string): Advertisments[] {
    if (!ads || !date || !schedule) {
      return ads;
    }

    return ads.filter(ad =>
      ad.date.includes(date) && ad.schedule.includes(schedule)
    );
  }

}
