import {
  HomeBannerConfig,
  InfluencerNearYouConfig,
  MarketingConfig,
  QuestionsConfig,
  TopInfluencerConfig,
  WhyChooseConfig,
} from '@interfaces/main.interface';

export const whyChooseInfluencer: WhyChooseConfig = {
  title: 'Why Choose',
  subtitle: 'as an Influencer',
  items: [
    {
      title: 'Direct Connections',
      subtitle:
        'Connect with brands looking for influencers in your niche without intermediaries.',
      active: false,
      icon: '/assets/svg/direct.svg',
    },
    {
      title: 'Verified Collaborations',
      subtitle:
        "Enjoy complete transparency in your collaborations. Know the influencers you're working with and build authentic.",
      active: true,
      icon: '/assets/svg/verified.svg',
    },
    {
      title: 'Real Impact',
      subtitle:
        'Cut out the middlemen and save on unnecessary fees. Maximize your budget for impactful influencer marketing campaigns.',
      active: false,
      icon: '/assets/svg/impact.svg',
    },
  ],
};

export const whyChooseBrand: WhyChooseConfig = {
  title: 'Why Choose',
  subtitle: 'as an Brand',
  items: [
    {
      title: 'Verified Contact Details',
      subtitle:
        'Connect with brands looking for influencers in your niche without intermediaries.',
      active: true,
      icon: '/assets/svg/contact-details.svg',
    },
    {
      title: 'Transparent Collaborations',
      subtitle:
        "Enjoy complete transparency in your collaborations. Know the influencers you're working with and build authentic.",
      active: false,
      icon: '/assets/svg/colaboration.svg',
    },
    {
      title: 'Cost-Effective Campaigns',
      subtitle:
        'Cut out the middlemen and save on unnecessary fees. Maximize your budget for impactful influencer marketing campaigns.',
      active: false,
      icon: '/assets/svg/cost.svg',
    },
  ],
};

export const questions: QuestionsConfig = {
  title: 'Frequently Asked Questions Why Choose',
  items: [
    {
      title: 'What questions do your clients usually ask?',
      subtitle:
        "Please provide comprehensive answers to those questions. You will save lots of time and money by eliminating the necessity to give constant support. You also will keep your clients' time cause they will quickly find the answers to all their questions.",
      active: false,
    },
    {
      title: 'What questions do your clients usually ask?',
      subtitle:
        "Please provide comprehensive answers to those questions. You will save lots of time and money by eliminating the necessity to give constant support. You also will keep your clients' time cause they will quickly find the answers to all their questions.",
      active: false,
    },
    {
      title: 'What questions do your clients usually ask?',
      subtitle:
        "Please provide comprehensive answers to those questions. You will save lots of time and money by eliminating the necessity to give constant support. You also will keep your clients' time cause they will quickly find the answers to all their questions.",
      active: false,
    },
    {
      title: 'What questions do your clients usually ask?',
      subtitle:
        "Please provide comprehensive answers to those questions. You will save lots of time and money by eliminating the necessity to give constant support. You also will keep your clients' time cause they will quickly find the answers to all their questions.",
      active: false,
    },
  ],
};

export const influencerNearYou: InfluencerNearYouConfig = {
  title: 'Influencer Near You',
  columns: [
    {
      title: 'Influencer in Bangalore',
      items: [
        {
          title: 'Influencer in Koramangala',
        },
        {
          title: 'Influencer in Marathahalli',
        },
        {
          title: 'Influencer in HSR',
        },
        {
          title: 'Influencer in Indira',
        },
        {
          title: 'Influencer in Chandra',
        },
        {
          title: 'Influencer in Jayanagar',
        },
      ],
    },
    {
      title: 'Influencer in Mumbai',
      items: [
        {
          title: 'Influencer in Andheri West',
        },
        {
          title: 'Influencer in Malad West',
        },
        {
          title: 'Influencer in Navi Mumbai',
        },
        {
          title: 'Influencer in Powai',
        },
        {
          title: 'Influencer in Bandra West',
        },
        {
          title: 'Influencer in Kharghar',
        },
      ],
    },
    {
      title: 'Influencer in Chennai',
      items: [
        {
          title: 'Influencer in Velachery',
        },
        {
          title: 'Influencer in Thiruvanmiyur',
        },
        {
          title: 'Influencer in Madipakkam',
        },
        {
          title: 'Influencer in Sholinganallur',
        },
        {
          title: 'Influencer in Mylapore',
        },
        {
          title: 'Influencer in Adyar',
        },
      ],
    },
    {
      title: 'Influencer in Delhi',
      items: [
        {
          title: 'Influencer in Vasant Vihar',
        },
        {
          title: 'Influencer in Hauz Khas',
        },
        {
          title: 'Influencer in Gulmohar Park',
        },
        {
          title: 'Influencer in East of Kailash',
        },
        {
          title: 'Influencer in Lajpat Nagar',
        },
        {
          title: 'Influencer in Greater Kailash',
        },
      ],
    },
    {
      title: 'Influencer Hyderabad',
      items: [
        {
          title: 'Influencer in Banjara Hills',
        },
        {
          title: 'Influencer in Jubilee Hills',
        },
        {
          title: 'Influencer in Madhapur',
        },
        {
          title: 'Influencer in Hitech City',
        },
        {
          title: 'Influencer in Gachibowli',
        },
        {
          title: 'Influencer in Kukatpally',
        },
      ],
    },
  ],
};

export const brands: Array<string> = [
  '/assets/svg/new-work.svg',
  '/assets/svg/forbes.svg',
  '/assets/svg/apple.svg',
  '/assets/svg/mashable.svg',
  '/assets/svg/wsj.svg',
  '/assets/svg/google-footer.svg',
];

export const marketingConfig: MarketingConfig = {
  title: 'Technology Driven Influencer Marketing Agency in India',
  subtitle: 'Fully customizable and neatly organized components will help you work faster without limiting creative freedom.',
  items: [
    {
      title: 'Influencers',
      subtitle:
        'Lorem Ipsum Is Simply Dummy Text Of The Printing And Industry.',
      button: 'Sign up',
      image: '/assets/png/card-marketing.png',
      active: true,
    },
    {
      title: 'Brands',
      subtitle:
        'Lorem Ipsum Is Simply Dummy Text Of The Printing And Industry.',
      button: 'Sign up',
      image: '/assets/png/card-marketing2.png',
      active: false,
    },
  ],
};


export const homeBannerConfig: HomeBannerConfig[] = [
  {
    headline: 'Wireframer Influencer Platform',
    title: 'Where Influencers and Brands Connect Directly for Authentic Campaigns”',
    subtitle: 'Welcome to Platform Name, where brands connect directly with influencers, hassle-free.',
    bannerUrl: '/assets/png/background.png',
    button: 'Start Now'
  },
  {
    headline: 'Wireframer Influencer Platform',
    title: 'Where Influencers and Brands Connect Directly for Authentic Campaigns”',
    subtitle: 'Welcome to Platform Name, where brands connect directly with influencers, hassle-free.',
    bannerUrl: '/assets/png/background.png',
    button: 'Start Now'
  }
]

export const topInfluencer: TopInfluencerConfig = {
    title: 'Top Influencer',
    items: [
      {
        button: 'Contact Now',
        style: 'Fashion',
        active: true,
        name: 'Isa Khan',
        image: '/assets/png/card-influencer.png'
      },
      {
        button: 'Contact Now',
        style: 'Fashion',
        active: true,
        name: 'Isa Khan',
        image: '/assets/png/card-influencer.png'
      },
      {
        button: 'Contact Now',
        style: 'Fashion',
        active: true,
        name: 'Isa Khan',
        image: '/assets/png/card-influencer.png'
      },
      {
        button: 'Contact Now',
        style: 'Fashion',
        active: true,
        name: 'Isa Khan',
        image: '/assets/png/card-influencer.png'
      },
      {
        button: 'Contact Now',
        style: 'Fashion',
        active: true,
        name: 'Isa Khan',
        image: '/assets/png/card-influencer.png'
      },
      {
        button: 'Contact Now',
        style: 'Fashion',
        active: true,
        name: 'Isa Khan',
        image: '/assets/png/card-influencer.png'
      },
      {
        button: 'Contact Now',
        style: 'Fashion',
        active: true,
        name: 'Isa Khan',
        image: '/assets/png/card-influencer.png'
      },
      {
        button: 'Contact Now',
        style: 'Fashion',
        active: true,
        name: 'Isa Khan',
        image: '/assets/png/card-influencer.png'
      }
    ]
    
}