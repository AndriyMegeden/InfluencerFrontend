import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[singleDigitInput]'
})
export class SingleDigitInputDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    const cleanedValue = initialValue.replace(/\D/g, ''); // Оставляем только цифры
    const singleDigit = cleanedValue.slice(0, 1); // Берем только первую цифру

    // Если введена цифра, устанавливаем значение в поле и фокус на следующий элемент
    if (singleDigit !== '') {
      this.el.nativeElement.value = singleDigit;
      const nextInput = this.el.nativeElement.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    } else {
      this.el.nativeElement.value = ''; // Очищаем поле, если введенный символ не является цифрой
    }
  }
}