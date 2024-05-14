import { animate, state, style, transition, trigger } from "@angular/animations";

export const animacoes =  [trigger('animateDestroy', [
    state('in', style({ opacity: 1 })),
    transition(':leave', animate(400, style({
      opacity: 0, 
      transform: 'translateY(20px)'
    })))
  ])];