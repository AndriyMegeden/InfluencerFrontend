import { Validators } from '@angular/forms';

export type InputType = 'text' | 'password' | 'tel';
export type PageType = 'register' | 'login' | 'forgot-password';
export type SectionType =
  | 'socials'
  | 'agreement'
  | 'or'
  | 'userRoles'
  | 'back'
  | 'remember'
  | 'resetForm'
  | 'signUp'
  | 'signIn';
export type resetPasswordStep = 'one' | 'two' | 'three';
export type AuthStep = 'one' | 'two';

export interface Checkbox {
  checkboxId: string;
  checkboxValue: boolean;
  label: string;
  validators: Validators;
}

// export interface UserData {
//   username: string,
//   email: string
//   number: number,
//   password: string
// };


export interface Input {
  inputId: string;
  inputType: InputType;
  validators: Validators;
  value: any;
  label?: string;
  placeholder?: string;
  icon?: string;
  show?: boolean;
  showIcon?: string;
  hideIcon?: string;
}

export interface Button {
  id: string;
  text: string;
}

export interface SubtitleRecovery {
  part1?: string;
  part2?: string;
}

export interface AuthSettings {
  subtitleRecovery?: SubtitleRecovery;
  title?: string;
  subtitle?: string;
  titleRecovery?: string;
  sections: Array<SectionType>;
  inputs: Input[];
  checkboxes?: Checkbox[];
  buttons?: Button[];
}
