import { Pipe, PipeTransform } from '@angular/core';
import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroImpuro',
  pure: false
})
export class FiltroImpuroPipe extends FiltroArrayPipe {



}
