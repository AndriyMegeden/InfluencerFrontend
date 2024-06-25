import { Component, Input } from '@angular/core';
import { TopInfluencerConfig } from '@interfaces/main.interface';

@Component({
  selector: 'app-top-influencer',
  templateUrl: './top-influencer.component.html',
  styleUrl: './top-influencer.component.scss',
})
export class TopInfluencerComponent {
  @Input() config!: TopInfluencerConfig;

  public slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    showArrow: false,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  slickInit(event: any) {
    console.log('slick initialized');
  }
}
