import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'foodsOnEnterPressed]'
})
export class OnEnterPressedDirective {

  @Output() enterPressed = new EventEmitter();

  @HostListener('document:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if ((event.which === 13)) {
      this.enterPressed.emit();
    }
  }

}
