import { Pages } from "../../../models/Pages";
import { Role } from "../../../models/Role";
import { User } from "../../../models/User";
import { RolePagesArgs } from "./args/RolePagesArgs";
import { RoleUsersArgs } from "./args/RoleUsersArgs";
export declare class RoleRelationsResolver {
    users(role: Role, ctx: any, args: RoleUsersArgs): Promise<User[]>;
    pages(role: Role, ctx: any, args: RolePagesArgs): Promise<Pages[]>;
}
