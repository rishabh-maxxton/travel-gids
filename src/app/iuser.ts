export interface IUser {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
    address: {
      state: string;
      city: string;
      postcode: string;
    };
    rememberMe: boolean;
    acceptTerms: boolean;
}
