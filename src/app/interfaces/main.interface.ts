
export interface WhuChooseConfigOption{
    icon: string;
    title: string;
    subtitle: string;
    active: boolean;
}
  
export interface WhyChooseConfig {
    title: string;
    subtitle: string;
    items: WhuChooseConfigOption[]
}

export interface QuestionsConfigOption {
    title: string;
    subtitle: string;
    active: boolean;
}
  
export interface QuestionsConfig {
    title: string;
    items: QuestionsConfigOption[]
}

export interface InfluencerNearYouConfigColumnOption {
    title: string;
    link?: string 
}

export interface InfluencerNearYouConfigColumns {
    title?: string;
    items?: InfluencerNearYouConfigColumnOption[]
}

export interface InfluencerNearYouConfig {
    title: string;
    columns: InfluencerNearYouConfigColumns[];
}

export interface MarketingConfigOption {
    title: string;
    subtitle: string;
    button: string;
    image: string;
    active: boolean;
}

export interface MarketingConfig {
    title: string;
    subtitle: string;
    items: MarketingConfigOption[];
}

export interface HomeBannerConfig {
    headline: string;
    title: string;
    subtitle: string;
    bannerUrl: string;
    button: string;
}

export interface TopInfluencerConfigOption{
    button: string;
    style: string;
    name: string;
    active: boolean;
    image: string;
}

export interface TopInfluencerConfig {
    title: string;
    items: TopInfluencerConfigOption[];
}

