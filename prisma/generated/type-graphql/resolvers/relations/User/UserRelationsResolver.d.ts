import { Account } from "../../../models/Account";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { Profile } from "../../../models/Profile";
import { Role } from "../../../models/Role";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    role(user: User, ctx: any): Promise<Role>;
    profile(user: User, ctx: any): Promise<Profile | null>;
    sessions(user: User, ctx: any, args: UserSessionsArgs): Promise<Session[]>;
    accounts(user: User, ctx: any, args: UserAccountsArgs): Promise<Account[]>;
    posts(user: User, ctx: any, args: UserPostsArgs): Promise<Post[]>;
    comments(user: User, ctx: any, args: UserCommentsArgs): Promise<Comment[]>;
}
