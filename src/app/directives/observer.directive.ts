import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Observable, debounceTime } from 'rxjs';

@Directive({
  selector: '[appObserver]',
  exportAs: 'intersection' 
})
export class ObserverDirective {

  constructor() { }
  @Input() root: HTMLElement | null = null
  @Input() rootMargin = '0px 0px 0px 0px'
  @Input() threshold = 0
  @Input() debounceTime = 250
  @Input() isContinuous = false
  @Input() elementoObservado: HTMLElement | null = null
  @Output() isIntersecting = new EventEmitter<boolean>()
  
  intersecting = false
  
}
