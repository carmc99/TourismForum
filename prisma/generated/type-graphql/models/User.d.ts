import { Account } from "../models/Account";
import { Comment } from "../models/Comment";
import { Post } from "../models/Post";
import { Profile } from "../models/Profile";
import { Role } from "../models/Role";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    role?: Role | null;
    roleId?: string | null;
    accounts?: Account[];
    sessions?: Session[];
    profile?: Profile | null;
    posts?: Post[];
    comments?: Comment[];
    created_at: Date;
    updated_at: Date;
    _count?: UserCount | null;
}
