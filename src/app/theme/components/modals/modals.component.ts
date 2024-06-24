import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

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
  }
}
