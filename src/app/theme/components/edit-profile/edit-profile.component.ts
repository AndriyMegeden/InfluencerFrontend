import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent {
  @Output() openModalEvent = new EventEmitter<string>();

  constructor(protected renderer: Renderer2) {}

  openModal(type: string) {
    this.openModalEvent.emit(type);
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }
}
