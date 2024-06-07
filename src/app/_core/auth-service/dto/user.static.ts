import { CheckRefreshPasswordCodeRequest, CreateUserRequest, GenerateRefreshPasswordCodeRequest, LoginSocialUserRequest, LoginUserRequest, RefreshPasswordRequest, VerificationAuthFieldsRequest } from "./user.dto";

export const createUserRequest: CreateUserRequest = {
    authFieldType: 'email',
    authFieldValue: 'example@gmail.com',
    password: '123123',
    authInfo: {
        firstName: 'UserTest'
    }
}

export const loginUserRequest: LoginUserRequest = {
    authFieldType: 'email',
    authFieldValue: 'example@gmail.com',
    password: '123123'
}

export const loginSocialUserRequest: LoginSocialUserRequest = {
    authFieldType: 'email',
    authFieldValue: 'example@gmail.com',
    authSocialType: "google",
    authInfo: {
        firstName: 'Example'
    }
}

export const verificationAuthFieldsRequest: VerificationAuthFieldsRequest = {
    authFieldType: 'email',
    authFieldValue: 'example@gmail.com',
}

export const generateRefreshPasswordCodeRequest: GenerateRefreshPasswordCodeRequest = {
    authFieldType: 'email',
    authFieldValue: 'example@gmail.com',
}

export const checkRefreshPasswordCodeRequest: CheckRefreshPasswordCodeRequest = {
    authFieldType: 'email',
    authFieldValue: 'example@gmail.com',
    resetId: "64f0bab6b773dfd4b8dc34f7",
    resetSecret: "5802"
}

export const refreshPasswordRequest: RefreshPasswordRequest = {
    authFieldType: 'email',
    authFieldValue: 'example@gmail.com',
    resetId: "64f0bab6b773dfd4b8dc34f7",
    resetSecret: "5802",
    password: '123123'
}