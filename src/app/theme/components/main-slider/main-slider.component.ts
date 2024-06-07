import { Component, Input } from '@angular/core';
import { HomeBannerConfig } from '@interfaces/main.interface';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.scss'
})
export class MainSliderComponent {

  @Input() config!: HomeBannerConfig[];

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 8,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    showArrow: false
  };

  slickInit(event: any) {
    console.log('slick initialized');
  }

}
