import { Account } from "../models/Account";
import { Comment } from "../models/Comment";
import { Post } from "../models/Post";
import { Profile } from "../models/Profile";
import { Role } from "../models/Role";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name: string;
    email: string;
    emailVerified: Date;
    role?: Role;
    roleId: string;
    profile?: Profile | null;
    sessions?: Session[];
    accounts?: Account[];
    posts?: Post[];
    comments?: Comment[];
    created_at: Date;
    updated_at: Date;
    _count?: UserCount | null;
}
