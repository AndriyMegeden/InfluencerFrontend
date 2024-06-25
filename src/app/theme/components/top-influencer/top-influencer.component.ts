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
    autoplay: false,
    autoplaySpeed: 3000,
    showArrow: false,
  };

  slickInit(event: any) {
    console.log('slick initialized');
  }
}
