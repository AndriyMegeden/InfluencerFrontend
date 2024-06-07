import { Component, Input } from '@angular/core';
import { WhyChooseConfig } from '@interfaces/main.interface';

@Component({
  selector: 'app-why-choose',
  templateUrl: './why-choose.component.html',
  styleUrl: './why-choose.component.scss'
})
export class WhyChooseComponent {

  @Input() public config!: WhyChooseConfig;

}
