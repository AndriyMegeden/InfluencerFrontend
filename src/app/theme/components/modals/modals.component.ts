import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modals',

  templateUrl: './modals.component.html',
  styleUrl: './modals.component.scss',
})
export class ModalsComponent {
  @Input() isOpen: boolean = false;
  @Input() modalType: string = '';
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
