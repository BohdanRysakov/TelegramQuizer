import { UserModel } from "src/app/core/models/user-model";

export class LeaderboardModel {
    constructor(public leaderbord: UserModel[], public rank: number) { }
}