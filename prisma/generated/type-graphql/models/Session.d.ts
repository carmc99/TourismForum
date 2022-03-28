import { User } from "../models/User";
export declare class Session {
    id: string;
    expires: Date;
    sessionToken: string;
    userId: string;
    user?: User;
}
