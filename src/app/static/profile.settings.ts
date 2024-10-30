import {
  Biography,
  Experience,
  InsightCategory,
  Post,
  Switcher,
} from '@interfaces/profile.interface';

export const PostSettings: Post[] = [
  {
    like: '35.6 k',
    comment: '788',
    img: '//en/assets/png/post-profile.png',
  },
  {
    like: '35.6 k',
    comment: '788',
    img: '//en/assets/png/avatar.png',
  },
  {
    like: '35.6 k',
    comment: '788',
    img: '//en/assets/png/post-profile.png',
  },
  {
    like: '35.6 k',
    comment: '788',
    img: '//en/assets/png/avatar.png',
  },
];

export const PostSwitcher: Switcher[] = [
  {
    text: 'RecentPost',
  },
  {
    text: 'Insight',
  },
  {
    text: 'Bio',
  },
  {
    text: 'Experience',
  },
];

export const Categories: InsightCategory[] = [
  {
    title: 'Profile Hashtags',
    text: [
      '#tourism',
      '#trending',
      '#TravelPhotography',
      '#theportraitexpert',
      '#collab',
      '#Ad',
      '#tourism',
      '#phone',
      '#GapIndia',
      '#ThePortraitExpert',
      '#OppoPhotography',
    ],
  },
  {
    title: 'Profile Mention',
    text: [
      '@koshurindia',
      '@printsbyradhika',
      '@cosmoindia',
      '@makeupbyniharikamukim',
      '@RimaDidThat',
      '@ayinaa',
      '@dior',
      '@delhi',
      '@outhousejewellery',
      '@lakshaysachdevaphotography',
      '@ete_india',
      '@sabyasachiofficial',
      '@shivaniawastyofficial',
      '@nehajunejamakeup',
      '@hm',
    ],
  },
];

export const Bio: Biography[] = [
  {
    title: 'About Me',
    text: ['Hi, I am anjali bhatia 26-year-old ambitious Models / actor from Mumbai. I am interested in these are few areas which i am Ready to collaborate with a modeling agency, photographers, Stylist, brands, casting professional, or production house To execute local print campaigns or high-end fashion advertising I have natural acting skills so looking forward to taking the next step toward to being superstar or supermodel. I am available in Mumbai, Delhi NCR, and i can speak , so I hope I will get in touch if any work-related query download my contact.'],
  },
  {
    title: 'Skills',
    subtitle: ['Language :'],
    text:['Influencer has not specified the languages.'] ,
  },
  {
    title: 'Category',
    subtitle: ['Categories :', 'Current Profession :'],
    text: [
      'Models / actor',
      'Influencer has not specified their current profession.',
    ],
  },
  {
    title: 'Work Preference',
    subtitle: ['Available In :', 'Availability :'],
    text: ['Mumbai, Delhi NCR', 'Full Time'],
  },
  {
    title: 'Education',
    subtitle: ['Education :'],
    text: ['Influencer has not specified Education Details.'],
  },
];

export const exp: Experience[] = [
  {
    title: 'Education',
    text: 'Artist has not specified Experience Details.'
  }
]