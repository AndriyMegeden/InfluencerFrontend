import { Component } from '@angular/core';

import { ComponentsModule } from '@theme/components/components.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [ComponentsModule],
})
export class ProfileComponent {
  isModalOpen: boolean = false;
  modalType: string = '';

  openModal(type: string) {
    this.modalType = type;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
