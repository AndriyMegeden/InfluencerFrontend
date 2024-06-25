import { Component, Input } from '@angular/core';
import { HomeBannerConfig } from '@interfaces/main.interface'; // замініть на правильний шлях до вашого інтерфейсу

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
})
export class MainSliderComponent {
  @Input() config!: HomeBannerConfig[];

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true, // Додає ефект згасання
    cssEase: 'linear' // тип анімації 
  };

  slickInit(event: any) {
    console.log('slick initialized', event);
  }
}
