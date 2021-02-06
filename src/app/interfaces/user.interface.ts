export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IUserLogin {
    token: string;
    user: IUser;
    success: boolean;
}