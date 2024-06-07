export type VerifyType = 'email' | 'phoneNumber' | 'nickname' | 'socialId';
export type SocialType = 'google' | 'facebook';

export class CreateUserAuthInfoRequest {
  readonly firstName: string;
  readonly email?: string;
}
  
export class CreateUserRequest {
  readonly authFieldType: VerifyType;
  readonly authFieldValue: string;
  readonly password: string;
  readonly authInfo: CreateUserAuthInfoRequest;
}
  
export class LoginUserRequest {
  readonly authFieldType: VerifyType;
  readonly authFieldValue: string;
  readonly password: string;
}

export class LoginSocialUserRequest {
  readonly authSocialType: SocialType;
  readonly authFieldType: VerifyType;
  readonly authFieldValue: string;
  readonly authInfo?: CreateUserAuthInfoRequest;
}
  
export class VerificationAuthFieldsRequest {
  readonly authFieldType: VerifyType;
  readonly authFieldValue: string;
}

export class GenerateRefreshPasswordCodeRequest {
  readonly authFieldType: VerifyType;
  readonly authFieldValue: string;
}

export class CheckRefreshPasswordCodeRequest {
  readonly authFieldType: VerifyType;
  readonly authFieldValue: string;
  readonly resetId: string;
  readonly resetSecret: string;
}

export class RefreshPasswordRequest {
  readonly authFieldType: VerifyType;
  readonly authFieldValue: string;
  readonly resetId: string;
  readonly resetSecret: string;
  readonly password: string;
}