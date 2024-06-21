import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Output() openModalEvent = new EventEmitter<string>();

  openModal(type: string) {
    this.openModalEvent.emit(type);
  }
}
