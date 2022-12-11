export interface UserData {
    id: number;
    username: string;
    email: string;
    token: string;
    permission: string[];
  }
  
  export interface UserRO {
    user: UserData;
  }