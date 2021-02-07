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

export interface IUserUpdate {
    data: {
        firstName?: string;
        lastName?: string;
        email?: string;
        password?: string
    };
    userId: string;
}
