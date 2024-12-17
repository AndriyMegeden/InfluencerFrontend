import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Output() openModalEvent = new EventEmitter<string>();

  constructor(protected renderer: Renderer2) {}

  openModal(type: string) {
    this.openModalEvent.emit(type);
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }
}
