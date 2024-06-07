import { Validators } from '@angular/forms';
import { AuthSettings } from '@interfaces/auth.interface';
import { SocialType, UserRoles } from '@interfaces/user.interface';

export const userRoles: Array<{ id: UserRoles; text: string; icon?: string }> = [
  {
    id: 'brand',
    text: 'I’m a Brand',
    icon: '/assets/svg/brand.svg',
  },
  {
    id: 'influencer',
    text: 'I’m a Influencer',
    icon: '/assets/svg/influencer.svg',
  },
];

export const socials: Array<{ id: SocialType; text: string }> = [
  {
    id: 'google',
    text: 'Google',
  },
  {
    id: 'facebook',
    text: 'Facebook',
  },
];

export const checkBoxesStepOne: Array<{ id: string; text: string }> = [
  {
    id: 'auto',
    text: 'Auto',
  },
  {
    id: 'books',
    text: 'Books',
  },
  {
    id: 'beauty',
    text: 'Beauty',
  },
  {
    id: 'entertainments',
    text: 'Entertainments',
  },
  {
    id: 'lifestyle',
    text: 'Lifestyle',
  },
  {
    id: 'mom',
    text: 'Mom',
  },
  {
    id: 'travel',
    text: 'Travel',
  },
  {
    id: 'restaurants',
    text: 'Restaurants',
  },
  {
    id: 'gaming',
    text: 'Gaming',
  },
  {
    id: 'fitness',
    text: 'Fitness',
  },
  {
    id: 'vlog',
    text: 'Vlog',
  },
  {
    id: 'comedy',
    text: 'Comedy',
  },
  {
    id: 'education',
    text: 'Education',
  },
  {
    id: 'finance',
    text: 'Finance',
  },
  {
    id: 'food',
    text: 'Food',
  },
  {
    id: 'investment',
    text: 'Investment',
  },
  {
    id: 'mens-fasion',
    text: 'Men’s Fasion',
  },
  {
    id: 'parenting',
    text: 'Parenting',
  },
  {
    id: 'photography',
    text: 'Photography',
  },
  {
    id: 'technology',
    text: 'Technology',
  },
];

export const checkBoxesStepTwo: Array<{ id: string; text: string }> = [
  {
    id: 'blog',
    text: 'Blog',
  },
  {
    id: 'facebook',
    text: 'Facebook',
  },
  {
    id: 'twitter',
    text: 'Twitter',
  },
  {
    id: 'instagram',
    text: 'Instagram',
  },
  {
    id: 'youtube',
    text: 'YouTube',
  },
  {
    id: 'roposo',
    text: 'Roposo',
  },
];

export const resetKeys: Array<String> = ['key1', 'key2', 'key3', 'key4', 'key5'];

export const loginSetting: AuthSettings = {
  title: 'Welcome Back, Shasha K!',
  subtitle: 'Welcome back, please enter your detail',
  sections: ['socials', 'or', 'signUp', 'remember'],
  inputs: [
    {
      value: '',
      inputId: 'email',
      inputType: 'text',
      icon: '/assets/svg/email.svg',
      placeholder: 'Email',
      validators: [Validators.required, Validators.email],
    },
    {
      value: '',
      inputId: 'password',
      inputType: 'password',
      placeholder: 'Password',
      validators: [Validators.required, Validators.minLength(6)],
      icon: '/assets/svg/password.svg',
      show: false,
      showIcon: '/assets/svg/eye-show.svg',
      hideIcon: '/assets/svg/eye-hide.svg',
    },
  ],
  buttons: [
    {
      id: 'signIn',
      text: 'SIGN IN',
    },
  ],
};

export const registerSetting: AuthSettings = {
  title: 'Create your account',
  subtitle: "Let's create an account and start a wonderful journey",
  sections: ['agreement', 'userRoles', 'or', 'socials', 'signIn'],
  inputs: [
    {
      value: '',
      inputId: 'username',
      inputType: 'text',
      //   label: 'components.auth.inputs.email.label',
      placeholder: 'Username',
      validators: [Validators.required, Validators.minLength(5)],
      icon: '/assets/svg/username.svg',
    },
    {
      value: '',
      inputId: 'email',
      inputType: 'text',
      //   label: 'components.auth.inputs.email.label',
      placeholder: 'Email',
      validators: [Validators.required, Validators.email],
      icon: '/assets/svg/email.svg',
    },
    {
      value: '',
      inputId: 'phoneNumber',
      inputType: 'tel',
      placeholder: 'Mobile Number',
      validators: [Validators.required, Validators.minLength(19)],
      icon: '/assets/svg/phone.svg',
    },
    {
      value: '',
      inputId: 'password',
      inputType: 'password',
      placeholder: 'Password',
      validators: [Validators.required, Validators.minLength(6)],
      icon: '/assets/svg/password.svg',
      showIcon: '/assets/svg/eye-show.svg',
      hideIcon: '/assets/svg/eye-hide.svg',
    },
  ],
  checkboxes: [
    {
      checkboxId: 'userRoles',
      checkboxValue: false,
      label: 'components.auth.checkboxes.agreement',
      validators: [Validators.required, Validators.requiredTrue],
    },
  ],
  buttons: [
    {
      id: 'signUp',
      text: 'SIGN UP',
    },
  ],
};

export const forgotSettingStepOne: AuthSettings = {
  titleRecovery: 'Enter OTP',
  subtitleRecovery: {
    part1: 'We have shared a code to your registered',
    part2: 'Mobile Number',
  },
  sections: ['back'],
  inputs: [
    {
      value: '',
      inputId: 'phoneNumber',
      inputType: 'tel',
      placeholder: 'Mobile Number',
      validators: [Validators.required, Validators.minLength(19)],
      icon: '/assets/svg/phone.svg',
    },
  ],
  buttons: [
    {
      id: 'verify',
      text: 'Send code',
    },
  ],
};

export const forgotSettingStepTwo: AuthSettings = {
  titleRecovery: 'Enter OTP',
  subtitleRecovery: {
    part1: 'We have shared a code to your registered',
    part2: 'Mobile Number',
  },
  sections: ['back', 'resetForm'],
  inputs: [],
  buttons: [
    {
      id: 'verify',
      text: 'VERIFY',
    },
  ],
};

export const forgotSettingStepThree: AuthSettings = {
  titleRecovery: 'Enter OTP',
  subtitleRecovery: {
    part1: 'We have shared a code to your registered',
    part2: 'Mobile Number',
  },
  sections: ['back'],
  inputs: [
    {
      value: '',
      inputId: 'password',
      inputType: 'password',
      placeholder: 'Password',
      validators: [Validators.required, Validators.minLength(6)],
      icon: '/assets/svg/password.svg',
      showIcon: '/assets/svg/eye-show.svg',
      hideIcon: '/assets/svg/eye-hide.svg',
    },
    {
      value: '',
      inputId: 'repeatPassword',
      inputType: 'password',
      placeholder: 'Repeat password',
      validators: [Validators.required, Validators.minLength(6)],
      icon: '/assets/svg/password.svg',
      showIcon: '/assets/svg/eye-show.svg',
      hideIcon: '/assets/svg/eye-hide.svg',
    },
  ],
  buttons: [
    {
      id: 'save',
      text: 'Save',
    },
  ],
};
