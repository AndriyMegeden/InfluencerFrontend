import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth-service/services/auth.service';

@Component({
  selector: 'app-modals',

  templateUrl: './modals.component.html',
  styleUrl: './modals.component.scss',
})
export class ModalsComponent {
  @Input() isOpen: boolean = false;
  @Input() modalType: string = '';
  @Output() closeModalEvent = new EventEmitter<void>();
  @ViewChild('inputElement') inputElement!: ElementRef;
  public isActiveMenu: boolean = false;
  constructor(protected router: Router, protected auth: AuthService,     protected renderer: Renderer2,) {}

  activeButton:
    | 'instagram'
    | 'tiktok'
    | 'fasebook'
    | 'youtube'
    | 'more'
    | 'social' = 'social';

  setActive(value: 'instagram' | 'tiktok' | 'fasebook' | 'youtube' | 'more') {
    this.activeButton = value;
  }

  copyLink() {
    const inputValue = this.inputElement.nativeElement as HTMLInputElement;
    // Выделение текста
    inputValue.select();
    inputValue.setSelectionRange(0, inputValue.value.length); // Для мобильных устройств

    // Копирование текста в буфер обмена
    document.execCommand('copy');

    inputValue.setSelectionRange(0, 0);
  }

  closeModal() {
    this.closeModalEvent.emit();
    this.renderer.removeStyle(document.body, 'overflow');
  }

  // кнопка яка видаляє наш акаунт 
  deleteAccount() {
    const currentEmail = localStorage.getItem('email');
    if (currentEmail) {
      this.auth.deleteUser();
      this.auth.getUserId(currentEmail);
      this.isActiveMenu = !this.isActiveMenu;
      this.closeModal()
      this.router.navigate(['/main/home']);
      this.auth.logOut();
    } else {
      console.error('Email не знайдено в localStorage');
    }
  }
}
