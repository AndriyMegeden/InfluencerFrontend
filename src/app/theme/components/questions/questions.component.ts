import { Component, Input } from '@angular/core';
import { QuestionsConfig } from '@interfaces/main.interface';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {

  @Input() config!: QuestionsConfig;

}
