export type UserRoles = 'brand' | 'influencer';
export type SocialType = 'google' | 'facebook';

export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}
