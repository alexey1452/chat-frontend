export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IUserLogin {
    token: string;
    user: IUser;
    success: boolean;
}