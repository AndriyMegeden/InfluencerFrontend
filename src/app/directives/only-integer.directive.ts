import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyInteger]'
})
export class OnlyIntegerDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    let value = this.el.nativeElement.value;
    
    // Проверяем, является ли ввод пустым
    if (value.trim() === '') {
      this.el.nativeElement.value = ''; // Если да, устанавливаем значение поля ввода как пустую строку
      return; // Завершаем выполнение функции
    }

    // Если ввод не пустой, удаляем все нечисловые символы
    value = value.replace(/[^0-9]*/g, '');

    // Устанавливаем отфильтрованное значение обратно в поле ввода
    this.el.nativeElement.value = value;
  }
}