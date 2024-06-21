import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
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
