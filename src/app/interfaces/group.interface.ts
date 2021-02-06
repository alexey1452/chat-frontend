export interface IGroup {
    ownerId: string;
    title: string;
}

export interface IGroupHttp extends IGroup {
    _id: string;
    createdAt: string;
}
