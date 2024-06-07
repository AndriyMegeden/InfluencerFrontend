import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent {
  @Output() openModalEvent = new EventEmitter<string>();

  openModal(type: string) {
    this.openModalEvent.emit(type);
  }
}
