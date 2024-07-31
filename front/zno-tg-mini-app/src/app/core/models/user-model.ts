export class UserModel {
    constructor(
      public id = 0,
      public displayName: string = 'Lol Boba',
      public userScore: number = 1545413,
      public photoUrl = '',
      public userRank: number = 1564,
      public userReward = 150,
      public userPlace = 1
    ) { }
  
    public static fromJson(json: any): UserModel {
      return new UserModel(
        json.telegram_id,
        json.user_name,
        json.stars,
        json.avatar_url,
      );
    }
  
    public static fromArrayJson(json: any[]): UserModel[] {
      return json.map((user) => UserModel.fromJson(user));
    }
  }