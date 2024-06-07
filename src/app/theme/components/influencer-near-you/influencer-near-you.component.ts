import { Component, Input } from '@angular/core';
import { InfluencerNearYouConfig } from '@interfaces/main.interface';

@Component({
  selector: 'app-influencer-near-you',
  templateUrl: './influencer-near-you.component.html',
  styleUrl: './influencer-near-you.component.scss'
})
export class InfluencerNearYouComponent {

  @Input() config!: InfluencerNearYouConfig;

}
