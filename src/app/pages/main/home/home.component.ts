import { Component } from '@angular/core';
import { HomeBannerConfig, InfluencerNearYouConfig, MarketingConfig, QuestionsConfig, TopInfluencerConfig, WhyChooseConfig } from '@interfaces/main.interface';
import { brands, homeBannerConfig, influencerNearYou, marketingConfig, questions, topInfluencer, whyChooseBrand, whyChooseInfluencer } from '@static/main.settings';
import { SharedThemeModule } from '@theme/shared.theme.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedThemeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  public homeBanner: HomeBannerConfig[] = homeBannerConfig;
  public whyChooseInfluencer: WhyChooseConfig = whyChooseInfluencer;
  public whyChooseBrand: WhyChooseConfig = whyChooseBrand;
  public questions: QuestionsConfig = questions;
  public influencerNearYou: InfluencerNearYouConfig = influencerNearYou;
  public topInfluencer: TopInfluencerConfig = topInfluencer;
  public brands: Array<string> = brands;
  public marketingConfig: MarketingConfig = marketingConfig;

}
