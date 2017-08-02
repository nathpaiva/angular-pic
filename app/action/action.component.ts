import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'action',
  templateUrl: './action.component.html'
})

export class ActionComponent {
  @Input() text: string = 'Ok';
  @Input() style: string = 'btn';
  @Input() typeAction: string = 'button';
  @Input() isDisabled: boolean;
  @Output() do = new EventEmitter();

  @Input() needConfirm: boolean = false;


  constructor(){

  }

  action(){
    if (!this.needConfirm) {
      this.do.emit(null);
      return;
    }

    if(confirm('Tem certeza?')) {
      this.do.emit(null); 
    }
  }
}
