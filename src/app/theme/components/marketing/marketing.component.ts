import { Component, Input } from '@angular/core';
import { MarketingConfig } from '@interfaces/main.interface';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.scss'
})
export class MarketingComponent {

  @Input() config!: MarketingConfig;

}
